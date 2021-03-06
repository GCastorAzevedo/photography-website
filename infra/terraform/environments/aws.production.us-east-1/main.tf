# https://rangle.io/blog/frontend-app-in-aws-with-terraform/

provider "aws" {
  backend    = "s3"
  access_key = "${var.access_key}"
  secret_key = "${var.secret_key}"
  region     = "${var.region}"
}
