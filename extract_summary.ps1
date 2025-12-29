$content = Get-Content -Path 'c:\Users\kiku\Desktop\Contents\Thinkers-700\data.js' -Encoding UTF8 -Raw
$matches = [regex]::Matches($content, '\{[\s\S]*?\}')
$data = foreach ($m in $matches) {
    # Using more robust match for potentially multiline objects
    if ($m.Value -match '"id":\s*"(?<id>.*?)"') { $id = $Matches.id } else { $id = "" }
    if ($m.Value -match '"name":\s*"(?<name>.*?)"') { $name = $Matches.name } else { $name = "" }
    if ($m.Value -match '"summary":\s*"(?<summary>.*?)"') { $summary = $Matches.summary } else { $summary = "" }
    if ($m.Value -match '"school":\s*\[(?<school>.*?)\]') { $school = ($Matches.school -replace '"', '').Trim() } else { $school = "" }
    
    if ($id -and $name) {
        [PSCustomObject]@{
            id      = $id
            name    = $name
            summary = $summary
            school  = $school
        }
    }
}
$data | Export-Csv -Path 'c:\Users\kiku\Desktop\Contents\Thinkers-700\thinkers_summary.csv' -NoTypeInformation -Encoding UTF8
