# https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean

provider "digitalocean" {
  token = "${var.do_token}"
}

resource "digitalocean_droplet" "photography_website" {
  image  = "ubuntu-18-04-x64"
  name   = "photo-web"
  region = "${var.region}"
  # count              = "1"
  size               = "s-1vcpu-1gb"
  tags               = ["production"]
  monitoring         = true
  private_networking = true
  ssh_keys = [
    "${var.ssh_fingerprint}"
  ]
  connection {
    host        = "${self.ipv4_address}"
    user        = "root"
    password    = "${var.root_password}"
    type        = "ssh"
    private_key = "${file(var.pvt_key)}"
    timeout     = "2m"
  }
  provisioner "remote-exec" {
    inline = [
      "export PATH=$PATH:/usr/bin",
      "sudo apt-get update",
      "sudo apt-get -y install nginx"
    ]
  }
}

output "public_ip_server" {
  value = "${digitalocean_droplet.photography_website.ipv4_address}"
}

