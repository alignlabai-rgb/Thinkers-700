$content = Get-Content 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js' -Raw -Encoding UTF8
$matches = [regex]::Matches($content, '"school": \[([^\]]+)\]')
$allTags = @()
foreach ($m in $matches) {
    $tags = $m.Groups[1].Value -split ","
    foreach ($t in $tags) {
        $tag = $t.Trim().Trim('"')
        if ($tag) {
            $allTags += $tag
        }
    }
}
$grouped = $allTags | Group-Object | Sort-Object -Property Count -Descending
foreach ($g in $grouped) {
    Write-Output "$($g.Count)`t$($g.Name)"
}
