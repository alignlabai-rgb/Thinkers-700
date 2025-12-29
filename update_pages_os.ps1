$files = Get-ChildItem -Path 'c:\Users\kiku\Desktop\Contents\Thinkers-700\pages\*.html'
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Encoding UTF8 -Raw
    $changed = $false
    if ($content -match '科学方法OS') {
        $content = $content -replace '科学方法OS', '科学OS'
        $changed = $true
    }
    if ($content -match '倒理OS') {
        $content = $content -replace '倒理OS', '倫理OS'
        $changed = $true
    }
    if ($content -match '美OS') {
        $content = $content -replace '美OS', '芸術OS'
        $changed = $true
    }
    if ($changed) {
        $content | Set-Content $f.FullName -Encoding UTF8
        Write-Host "Updated: $($f.Name)"
    }
}
