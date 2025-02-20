document.getElementById('generateEmailButton').addEventListener('click', function() {
    const randomEmail = generateRandomEmail();
    document.getElementById('generatedEmail').textContent = randomEmail;
});

function generateRandomEmail() {
    const domains = ['example.com', 'test.com', 'sample.com'];
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    const randomUsername = Math.random().toString(36).substring(2, 10);
    return `${randomUsername}@${randomDomain}`;
}
