$msiPath = Join-Path $env:TEMP 'AWSCLIV2.msi'
Write-Host "Downloading AWS CLI v2 to $msiPath"
Invoke-WebRequest -Uri 'https://awscli.amazonaws.com/AWSCLIV2.msi' -OutFile $msiPath
Write-Host "Installing AWS CLI v2"
Start-Process -FilePath msiexec.exe -ArgumentList '/i', $msiPath, '/qn' -Wait
Write-Host "Cleaning up"
Remove-Item $msiPath -Force
Write-Host "Verifying installation"
aws --version