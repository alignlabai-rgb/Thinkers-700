$content = Get-Content -Path "data.js" -Raw -Encoding UTF8
$content = $content -replace '"school":\s*"([^"]+)"', '"school": ["$1"]'
Set-Content -Path "data.js" -Value $content -Encoding UTF8
Write-Host "Conversion complete!"
