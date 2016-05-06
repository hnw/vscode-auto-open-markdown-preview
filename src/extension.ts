'use strict';
import * as vscode from 'vscode';
import {workspace, window, commands, ExtensionContext} from 'vscode';

export function activate(context: ExtensionContext) {
    let alreadyOpenedFirstMarkdown = false;
    function previewFirstMarkdown() {
        if (alreadyOpenedFirstMarkdown) {
	    return;
	}
        let editor = window.activeTextEditor;
        if (editor) {
            let doc = editor.document;
            if (doc && doc.languageId === "markdown") {
                openMarkdownPreviewSideBySide();
                alreadyOpenedFirstMarkdown = true;
            }
        }
    }
    function openMarkdownPreviewSideBySide() {
        commands.executeCommand("workbench.action.closeOtherEditors")
        .then(() => commands.executeCommand("workbench.action.markdown.openPreviewSideBySide"))
        .then(() => {}, (e) => console.error(e));
    }

    if (window.activeTextEditor) {
        previewFirstMarkdown();
    } else {
        vscode.window.onDidChangeActiveTextEditor(()=>{
            previewFirstMarkdown();
        });
    }

    vscode.workspace.onDidOpenTextDocument((d)=>{
        if (d.languageId === "markdown") {
	    openMarkdownPreviewSideBySide();
        }
    });
}

export function deactivate() {
}
