export TF_VAR_do_token=${DO_TOKEN}
export TF_VAR_do_access_key=${HOME}/.ssh/id_rsa.pub
export TF_VAR_do_secret_key=${HOME}/.ssh/id_rsa
export TF_VAR_ssh_fingerprint=$(ssh-keygen -E md5 -lf ~/.ssh/id_rsa.pub | awk '{print $2}' | sed 's/MD5://')
export DO_SSH_FINGERPRINT=$(ssh-keygen -E md5 -lf ~/.ssh/id_rsa.pub | awk '{print $2}' | sed 's/MD5://' )

terraform plan \
  -var "do_token=${DO_TOKEN}" \
  -var "pub_key=$HOME/.ssh/id_rsa.pub" \
  -var "pvt_key=$HOME/.ssh/id_rsa" \
  -var "ssh_fingerprint=${DO_SSH_FINGERPRINT}"
