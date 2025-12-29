$dataPath = 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js'
$content = Get-Content $dataPath -Raw -Encoding UTF8

# Aristotle (万学の祖): Add 芸術OS
$content = $content -replace '("name": "アリストテレス",[\s\S]*?"school": \["哲学OS", "科学OS", "倫理OS", "政治OS"\])', '$1'.Replace('"哲学OS", "科学OS", "倫理OS", "政治OS"', '"哲学OS", "科学OS", "倫理OS", "政治OS", "芸術OS"')

$content | Set-Content $dataPath -Encoding UTF8
Write-Host "Test update completed"
