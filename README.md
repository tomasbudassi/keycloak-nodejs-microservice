## keycloak-nodejs-microservice

### EndPoints utilizados

LOGIN (POST)  
- http://localhost:8080/auth/realms/Demo-Realm/protocol/openid-connect/token 

#### Request (Body x-www-form-urlencoded)
```
grant_type = password
client_id = nodejs-microservice
client_secret = 22e5393f-1569-45ea-8218-3ffe86bda1fb
username = employee2
password = mypassword
```

#### Response
```
{
    "access_token": "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJVbVpSYld3anlGdTV4YlprUTVMXzM4aDZuNHNYcTl5S29NS3RvNzhYSXN3In0.eyJleHAiOjE2MzI4Njc0NTcsImlhdCI6MTYzMjg2NzE1NywianRpIjoiOGRkNDZlYjgtNDdjOC00ODkxLWIyNWEtMmZmZWU1NTBkZmQxIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL0RlbW8tUmVhbG0iLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiOGJiZTllMmItZWM3Yy00Y2YyLTgyYmUtNDEzYjFkZmM2MjkxIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoibm9kZWpzLW1pY3Jvc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI2NzY0ZmQ5OC1mODE4LTQ2NjItYjQ5Yi1lZGVlOGVhZjRmMGIiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsib2ZmbGluZV9hY2Nlc3MiLCJhcHAtYWRtaW4iLCJkZWZhdWx0LXJvbGVzLWRlbW8tcmVhbG0iLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7Im5vZGVqcy1taWNyb3NlcnZpY2UiOnsicm9sZXMiOlsiYWRtaW4iXX0sImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjY3NjRmZDk4LWY4MTgtNDY2Mi1iNDliLWVkZWU4ZWFmNGYwYiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJlbXBsb3llZTIifQ.fuArbK_YwdgSDvHthaIfT60DzmyYp5m5AvD8XNe6FacgiJBT0u14mQx5MsPAU7kwcgCTbT9EEksuwAKih8SZjTZH5aZDPqOeTFDn3HVO3-OvFL4-dYEdBHCUAXbTne78e-cZ0IN89fNKKaNiLZIs5Mjqcs051DlEgcDHNMQTDkrCcXts1ixXJXrNHYRIUH7XGRJ2unqjbhWFxQ8Rim59y1PyNIbGb20RWvVb-CCAU9iQ67szV7ga31B2YRGmG339L3nhryFSJUmbxkvvtKj6Am5Je8gb2E8oNrRa_DZCGUeFhETvWAMIkNBg7fHacmk1seDgsSOqOOQkwI3dKh8MRw",
    "expires_in": 300,
    "refresh_expires_in": 1800,
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJiMzE3OWY5MC0zYjExLTRlMGEtYTEzZS03YjQ4MzU0ZGQxYzYifQ.eyJleHAiOjE2MzI4Njg5NTcsImlhdCI6MTYzMjg2NzE1NywianRpIjoiYWNiNjBhYzctYzJiMS00NDQ1LTk4NjctMDAzZDRlODI0OWM4IiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2F1dGgvcmVhbG1zL0RlbW8tUmVhbG0iLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvRGVtby1SZWFsbSIsInN1YiI6IjhiYmU5ZTJiLWVjN2MtNGNmMi04MmJlLTQxM2IxZGZjNjI5MSIsInR5cCI6IlJlZnJlc2giLCJhenAiOiJub2RlanMtbWljcm9zZXJ2aWNlIiwic2Vzc2lvbl9zdGF0ZSI6IjY3NjRmZDk4LWY4MTgtNDY2Mi1iNDliLWVkZWU4ZWFmNGYwYiIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsInNpZCI6IjY3NjRmZDk4LWY4MTgtNDY2Mi1iNDliLWVkZWU4ZWFmNGYwYiJ9.ROVM1ikbtouffc4do-d4LL-w-MqmBzp9gCdB2v9arzw",
    "token_type": "Bearer",
    "not-before-policy": 0,
    "session_state": "6764fd98-f818-4662-b49b-edee8eaf4f0b",
    "scope": "email profile"
}
```

### PROBANDO INGRESOS DE DISTINTOS TIPOS DE USUARIO (con su respectivo token)
---

Anonymous (GET)
- http://localhost:3000/test/anonymous 

#### Response
``` Hello anonymous ```

---

User (GET)
- http://localhost:3000/test/user 

#### Response
``` Hello user ```

---
  
Admin (GET) 
- http://localhost:3000/test/admin

#### Response
``` Hello admin ```

---
  
All User (GET)
- http://localhost:3000/test/all-user 

#### Response
``` Hello all user ```
