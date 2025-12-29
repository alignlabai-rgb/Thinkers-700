$dataPath = 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js'
$content = Get-Content $dataPath -Raw -Encoding UTF8

# Aristotle: Add 芸術OS
$content = $content -replace '"school": \["哲学OS", "科学OS", "倫理OS", "政治OS"\],([\r\n\s]*)"summary": "万学の祖、形而上学"', '"school": ["哲学OS", "科学OS", "倫理OS", "政治OS", "芸術OS"],$1"summary": "万学の祖、形而上学"'

# Buber: Add 教育OS
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "我と汝、対話的原理"', '"school": ["哲学OS", "教育OS"],$1"summary": "我と汝、対話的原理"'

# Buddha: Add 倫理OS
$content = $content -replace '"school": \["哲学OS", "宗教OS"\],([\r\n\s]*)"summary": "縁起、四諦"', '"school": ["哲学OS", "宗教OS", "倫理OS"],$1"summary": "縁起、四諦"'

# Braidotti: Add 倫理OS
$content = $content -replace '"school": \["哲学OS", "技術OS"\],([\r\n\s]*)"summary": "ノマド的主体、ポストヒューマン"', '"school": ["哲学OS", "技術OS", "倫理OS"],$1"summary": "ノマド的主体、ポストヒューマン"'

# Carson: Add 倫理OS (already has 科学OS)
$content = $content -replace '"school": \["哲学OS", "科学OS"\],([\r\n\s]*)"summary": "沈黙の春、環境思想"', '"school": ["哲学OS", "科学OS", "倫理OS"],$1"summary": "沈黙の春、環境思想"'

$content | Set-Content $dataPath -Encoding UTF8
Write-Host "OS tags updated for Aristotle, Buber, Buddha, Braidotti, Carson."
