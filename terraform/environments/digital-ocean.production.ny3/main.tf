# https://www.digitalocean.com/community/tutorials/how-to-use-terraform-with-digitalocean

provider "digitalocean" {
  token = "${var.do_token}"
}

connection {
  host        = "${self.ipv4_address}"
  user        = "root"
  type        = "ssh"
  private_key = "${file(var.pvt_key)}"
  timeout     = "2m"
}

resource "digitalocean_droplet" "photography_website" {
  image              = "ubuntu-18-04-x64"
  name               = "photo-web"
  region             = "${var.region}"
  count              = "1"
  size               = "s-1vcpu-1gb"
  tags               = ["production"]
  private_networking = true
  ssh_keys = [
    "${var.ssh_fingerprint}"
  ]
}

output "public_ip_server" {
  value = "${digitalocean_droplet.photography_website.ipv4_address}"
}

