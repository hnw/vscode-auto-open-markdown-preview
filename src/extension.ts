'use strict';
import * as vscode from 'vscode';
import {workspace, window, commands, ExtensionContext} from 'vscode';

export function activate(context: ExtensionContext) {

    let isToRiseNow = true;

    vscode.window.onDidChangeActiveTextEditor(editor => {
        console.log('active text editor');
        if (editor && editor.document && editor.document.languageId === "markdown") {
            if (isToRiseNow) {
                console.log(editor.document.fileName, 'setting to false ');
                isToRiseNow = false;
                commands.executeCommand('workbench.action.focusFirstEditorGroup')
                    .then(() => commands.executeCommand('markdown.showPreviewToSide'))
                    .then(() => commands.executeCommand('workbench.action.closeOtherEditors'))
                    .then(() => commands.executeCommand('workbench.action.focusFirstEditorGroup'))
                    .then(() => { }, (e) => console.error('Eror occured:', e));
            } else {
                console.log(editor.document.fileName, 'setting to true ');
                isToRiseNow = true;
            }
        }
    });
}

export function deactivate() {
}
