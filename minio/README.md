# MinIO

### Installation

mc admin policy set s3 consoleAdmin user="uid=ltcastelnuovo,ou=people,dc=castelnuovo,dc=dev"

### Policy template

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::NAME.castelnuovo.dev"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject"],
      "Resource": "arn:aws:s3:::NAME.castelnuovo.dev/*"
    }
  ]
}
```
