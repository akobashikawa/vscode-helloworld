// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let helloWorldDisposable = vscode.commands.registerCommand('helloworld.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World');
	});
	
	context.subscriptions.push(helloWorldDisposable);

	let helloDisposable = vscode.commands.registerCommand('helloworld.hello', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInputBox()
			.then((name: string = 'World') => {
				vscode.window.showInformationMessage(`Hello ${name}!`);
			
			});
	});
	
	context.subscriptions.push(helloDisposable);

	let dateTimeDisposable = vscode.commands.registerCommand('helloworld.dateTime', () => {
		const now : string = new Date().toLocaleString();
		vscode.window.showInformationMessage(now);
	});

	context.subscriptions.push(dateTimeDisposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
