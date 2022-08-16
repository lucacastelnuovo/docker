# MinIO

### Configure KES

```bash
kes identity new --key=s3-kes/server.key --cert=s3-kes/server.crt --dns s3-kes s3-kes

kes identity new --key=s3-kes/client.key --cert=s3-kes/client.crt s3

# Place output of this command in .env KES_IDENTITY
kes identity of s3-kes/client.crt
```

### Configure Vault

```bash
vault secrets enable -version=1 s3-kes

#path "kv/*" {
#   capabilities = [ "create", "read", "delete" ]
#}
vault policy write s3-kes-policy s3-kes-policy.hcl

vault auth enable approle
vault write auth/approle/role/s3-kes-role token_num_uses=0  secret_id_num_uses=0  period=5m

vault write auth/approle/role/s3-kes-role policies=s3-kes-policy

vault read auth/approle/role/s3-kes-role/role-id

vault write -f auth/approle/role/s3-kes-role/secret-id
```
