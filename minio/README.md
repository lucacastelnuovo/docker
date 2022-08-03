# MinIO

### Configure KES

```bash
./kes identity new --key=s3-kes/server.key --cert=s3-kes/server.crt --dns s3-kes s3-kes

./kes identity new --key=s3-kes/client.key --cert=s3-kes/client.crt s3

# Place output of this command in .env KES_IDENTITY
./kes identity of s3-kes/client.crt
```
