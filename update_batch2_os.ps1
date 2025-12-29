$dataPath = 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js'
$content = Get-Content $dataPath -Raw -Encoding UTF8

# Batch 2 Updates: Ranks 101-400

# Plato (P-421): Add 教育OS
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "イデア論、哲人政治"', '"school": ["哲学OS", "教育OS"],$1"summary": "イデア論、哲人政治"'

# Rousseau (P-449): Add 教育OS
$content = $content -replace '"school": \["政治OS"\],([\r\n\s]*)"summary": "社会契約論、一般意志"', '"school": ["政治OS", "教育OS"],$1"summary": "社会契約論、一般意志"'

# Kant (P-276): Add 科学OS (for Metaphysics of Nature)
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "純粋理性批判、定言命法"', '"school": ["哲学OS", "科学OS"],$1"summary": "純粋理性批判、定言命法"'

# Locke (P-317): Add 教育OS (for Some Thoughts Concerning Education)
$content = $content -replace '"school": \["哲学OS", "政治OS"\],([\r\n\s]*)"summary": "タブラ・ラサ、社会契約"', '"school": ["哲学OS", "政治OS", "教育OS"],$1"summary": "タブラ・ラサ、社会契約"'

# Newton (P-387): Already has 科学OS, add 数学OS
$content = $content -replace '"school": \["科学OS"\],([\r\n\s]*)"summary": "万有引力の法則、プリンキピア"', '"school": ["科学OS", "数学OS"],$1"summary": "万有引力の法則、プリンキピア"'

# Hegel (P-229): Add 芸術OS, 宗教OS
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "弁証法、絶対精神"', '"school": ["哲学OS", "宗教OS", "芸術OS", "政治OS"],$1"summary": "弁証法、絶対精神"'

# Marx (P-340): Add 経済OS
$content = $content -replace '"school": \["社会OS", "政治OS"\],([\r\n\s]*)"summary": "史的唯物論、資本論"', '"school": ["社会OS", "政治OS", "経済OS"],$1"summary": "史的唯物論、資本論"'

# Nietzsche (P-391): Add 芸術OS
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "権力への意志、永劫回帰"', '"school": ["哲学OS", "芸術OS"],$1"summary": "権力への意志、永劫回帰"'

# Wittgenstein (P-552): Add 心理OS
$content = $content -replace '"school": \["哲学OS", "言語OS"\],([\r\n\s]*)"summary": "言語ゲーム、像理論"', '"school": ["哲学OS", "言語OS", "心理OS"],$1"summary": "言語ゲーム、像理論"'

# Husserl (P-254): Already Philosophy, add 科学OS for Phenomenology as Science
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "現象学、本質直観"', '"school": ["哲学OS", "科学OS"],$1"summary": "現象学、本質直観"'

# Heidegger (P-228): Add 芸術OS (Art essay)
$content = $content -replace '"school": \["哲学OS"\],([\r\n\s]*)"summary": "存在と時間、現存在"', '"school": ["哲学OS", "芸術OS", "技術OS"],$1"summary": "存在と時間、現存在"'

# Darwin (P-116): Confirmed good with 科学OS
# Galileo (P-186): Add 技術OS
$content = $content -replace '"school": \["科学OS"\],([\r\n\s]*)"summary": "地動説、落下の法則"', '"school": ["科学OS", "技術OS"],$1"summary": "地動説、落下の法則"'

# Leonardo da Vinci (P-299): Add 芸術OS, 技術OS
$content = $content -replace '"school": \["科学OS"\],([\r\n\s]*)"summary": "ルネサンスの巨人、万能人"', '"school": ["科学OS", "芸術OS", "技術OS"],$1"summary": "ルネサンスの巨人、万能人"'

# Piaget (P-417): Add 教育OS
$content = $content -replace '"school": \["心理OS"\],([\r\n\s]*)"summary": "認知発達理論、構成主義"', '"school": ["心理OS", "教育OS"],$1"summary": "認知発達理論、構成主義"'

$content | Set-Content $dataPath -Encoding UTF8
Write-Host "Batch 2 OS tags updated."
