# MinIO

mc admin policy set s3 consoleAdmin user="uid=ltcastelnuovo,ou=people,dc=castelnuovo,dc=xyz"

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:PutObjectAcl"
      ],
      "Resource": ["arn:aws:s3:::invoices.castelnuovo.dev/*"]
    }
  ]
}
```
