$file = 'c:\Users\reddr\tedxpup-website\app\src\data\speakers.json'
$content = Get-Content $file -Raw -Encoding UTF8

$newBio = @"
Nabbe Francisco is a defining voice in the Philippine creative economy. As a "multi-hyphenate creative," he seamlessly bridges the gap between artistic expression and strategic digital marketing. He is the founder and owner of Uno Graphiko, an emerging agency that manages diverse brands remotely, celebrated for its ability to convert creative visuals into tangible business growth. His personal following of over 36,000 designers looks to him for mentorship on social media marketing and freelance survival.

However, Nabbe's most significant contribution is his leadership of the Filipino Graphic Designers (FGD) community. What started as a small support group has exploded into a thriving ecosystem of over 180,000 members—making it one of the largest and most active creative collectives in the Philippines. This group serves as a lifeline for Filipino creatives, offering a space for collaboration, job opportunities, and technical exchange.

Under his direction, the community launched IMPRINT 2025: Graphic Communications Upskilling Fair. This landmark event gathered over 500 attendees, including industry leaders and government representatives, to professionalize the freelance sector and emphasize continuous learning. Nabbe's excellence is rooted in strong academic foundations; he graduated Magna Cum Laude with a Bachelor's degree in Advertising and Public Relations from the Polytechnic University of the Philippines (PUP). His work and advocacy have been featured in PhilStar L!fe, ScoutMag, Village Pipol, and PageOne. Today, he continues to shape the future of the industry, advocating for a landscape where Filipino creativity is valued, protected, and compensated fairly.
"@

# Use regex to replace speaker-8's bio section
$pattern = '("id":\s*"speaker-8".*?"bio":\s*")[^"]*(")'
$replacement = "`$1$newBio`$2"
$content = $content -replace $pattern, $replacement

# Also update achievements
$achievementsPattern = '("id":\s*"speaker-8".*?"achievements":\s*\[)[^\]]*(\])'
$newAchievements = '"Community Leadership: Founded and grew Filipino Graphic Designers (FGD) community from a small group to over 180,000 members—one of the largest creative collectives in the Philippines.",
    "Event Impact: Organized IMPRINT 2025: Graphic Communications Upskilling Fair, gathering 500+ attendees including industry leaders and government representatives.",
    "Business Success: Founder and owner of Uno Graphiko, managing diverse brands remotely with proven track record of converting creative visuals into measurable business growth.",
    "Digital Influence: Built personal following of over 36,000 designers who look to him for mentorship on social media marketing and freelance survival.",
    "Academic Excellence: Graduated Magna Cum Laude with a Bachelor''s degree in Advertising and Public Relations from the Polytechnic University of the Philippines (PUP).",
    "Media Recognition: Work and advocacy featured in PhilStar L!fe, ScoutMag, Village Pipol, and PageOne."'
$achievementsReplacement = "`$1$newAchievements`$2"
$content = $content -replace $achievementsPattern, $achievementsReplacement

# Save the file
$content | Set-Content $file -NoNewline -Encoding UTF8

Write-Host "Successfully updated speaker-8's bio and achievements"
