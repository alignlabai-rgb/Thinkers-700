$content = Get-Content 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js' -Raw
$matches = [regex]::Matches($content, '"school":\s*\[(.*?)\]')
$all = @()
foreach ($m in $matches) {
    $vals = $m.Groups[1].Value -replace '"', ''
    $vals.Split(',') | ForEach-Object {
        $v = $_.Trim()
        if ($v) { $all += $v }
    }
}
$all | Select-Object -Unique | Sort-Object
