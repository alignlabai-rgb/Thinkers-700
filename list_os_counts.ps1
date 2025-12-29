$content = Get-Content -Path 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js' -Raw -Encoding UTF8
$matches = [regex]::Matches($content, '"school":\s*\[(.*?)\]')
$all = @{}
foreach ($m in $matches) {
    $vals = $m.Groups[1].Value -replace '"', ''
    $vals.Split(',') | ForEach-Object {
        $v = $_.Trim()
        if ($v) {
            if (-not $all.ContainsKey($v)) { $all[$v] = 0 }
            $all[$v]++
        }
    }
}
$all.GetEnumerator() | Sort-Object Value -Descending | ForEach-Object { "$($_.Value)`t$($_.Key)" }
