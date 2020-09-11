terraform {
  backend "s3" {
    bucket                      = "photo-web"
    key                         = "terraform/prod/terraform.tfstate"
    region                      = "us-east-1"
    endpoint                    = "https://ams3.digitaloceanspaces.com"
    skip_credentials_validation = true
    skip_metadata_api_check     = true
  }
}

provider "digitalocean" {
  version = "~> 1.20"
  token   = var.do_token
}

resource "digitalocean_droplet" "photography_website" {
  image              = "ubuntu-18-04-x64"
  name               = "photo-web"
  region             = var.region
  size               = "s-1vcpu-1gb"
  tags               = ["production"]
  monitoring         = true
  private_networking = true
  ssh_keys = [
    "${var.ssh_fingerprint}"
  ]
  connection {
    host        = self.ipv4_address
    user        = "root"
    password    = var.root_password
    type        = "ssh"
    private_key = "${var.pvt_key != "" ? var.pvt_key : file(var.pvt_key_file)}"
    timeout     = "2m"
  }

  provisioner "remote-exec" {
    inline = ["while [ ! -f /var/lib/cloud/instance/boot-finished ]; do echo 'Waiting for cloud-init...'; sleep 5; done"]
  }

  provisioner "remote-exec" {
    inline = [
      "export PATH=$PATH:/usr/bin",
      "sudo apt-get update",
      "sudo apt-get -y install nginx",
      # "echo ${file("../../../infra/nginx/nginx.conf")} > /etc/nginx/conf.d/nginx.conf",
      # "echo ${file("../../../infra/nginx/nginx.html")} > /var/www/html/index.html",
      # "sudo systemctl restart nginx",
      "apt install docker.io -y",
      "docker login docker.pkg.github.com -u ${var.github_user} -p ${var.github_token}",
      "docker pull ${var.docker_image_id}",
      "docker run -dit -p 80:80 ${var.docker_image_id}"
    ]
  }
}

resource "digitalocean_domain" "photography_website" {
  name       = var.domain_url
  ip_address = "${digitalocean_droplet.photography_website.ipv4_address}"
}

resource "digitalocean_record" "CNAME-www" {
  domain = digitalocean_domain.photography_website.name
  type   = "CNAME"
  name   = "www"
  value  = "@"
}

output "public_ip_server" {
  value = "${digitalocean_droplet.photography_website.ipv4_address}"
}

