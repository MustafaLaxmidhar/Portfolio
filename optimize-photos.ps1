# Get the current directory
$sourceDir = ".\assets\images\photography"

# Process all JPG files
Get-ChildItem -Path $sourceDir -Include *.jpg,*.JPG -Recurse | ForEach-Object {
    Write-Host "Processing: $($_.Name)"
    
    # Resize and optimize the image
    magick convert $_.FullName `
        -resize "1920x>" `
        -quality 85% `
        $_.FullName
    
    Write-Host "Completed: $($_.Name)"
}

Write-Host "All images processed!"