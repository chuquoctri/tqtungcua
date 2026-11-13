Set-Location -LiteralPath $PSScriptRoot
Write-Host "Mo trinh duyet tai http://localhost:8765"
py -m http.server 8765 --bind 127.0.0.1
