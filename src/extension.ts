'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidOpenTextDocument((d)=>{
        if (d.languageId === "markdown") {
            vscode.commands.executeCommand("workbench.action.closeOtherEditors")
	    .then(() => vscode.commands.executeCommand("workbench.action.markdown.openPreviewSideBySide"))
            .then(() => {}, (e) => console.error(e));
        }
    });
}

export function deactivate() {
}
