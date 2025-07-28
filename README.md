#Hashira-SecretKey
Shamir's Secret Sharing (JavaScript Version)
This project is a simplified implementation of Shamir's Secret Sharing scheme using JavaScript. It reconstructs a secret using multiple encoded shares in different bases. The input is given via a JSON file.

 Project Structure
secretrecovery/
├── input/
│   └── test1json
    |___test2.json
│   └── index.js
├── package.json
└── README.md
⚙️ Requirements
Ensure you have Node.js installed.

Installation
npm install
If no dependencies are used, you may skip this step.

Running the Project
Place your JSON input (e.g., test1.json) inside the input/ folder.

Run the script using:
node src/index.js input/test1.json
The output (reconstructed secret) will be shown in the console or terminal.
Input JSON (input/test1.json)
{}
The program supports multiple base conversions: binary, decimal, octal, hexadecimal, etc.

It uses Lagrange Interpolation in finite fields (modulo a prime) to reconstruct the secret.

This version is educational and does not provide cryptographic-grade security.
 References
Shamir's Secret Sharing - Wikipedia

Base conversion utilities in JavaScript
