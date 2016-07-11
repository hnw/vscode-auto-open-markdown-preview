'use strict';
import * as vscode from 'vscode';
import {workspace, window, commands, ExtensionContext} from 'vscode';

export function activate(context: ExtensionContext) {
    let alreadyOpenedFirstMarkdown = false;
    let markdown_preview_command_id = "";
    let close_other_editor_command_id = "";
    if (vscode.version >= "1.3.0") {
        close_other_editor_command_id = "workbench.action.closeEditorsInOtherGroups";
        markdown_preview_command_id = "markdown.showPreviewToSide";
    } else {
        close_other_editor_command_id = "workbench.action.closeOtherEditors";
        markdown_preview_command_id = "workbench.action.markdown.openPreviewSideBySide";
    }
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
        commands.executeCommand(close_other_editor_command_id)
        .then(() => commands.executeCommand(markdown_preview_command_id))
        .then(() => {}, (e) => console.error(e));
    }

    if (window.activeTextEditor) {
        previewFirstMarkdown();
    } else {
        vscode.window.onDidChangeActiveTextEditor(()=>{
            previewFirstMarkdown();
        });
    }

    vscode.workspace.onDidOpenTextDocument((doc)=>{
        if (doc && doc.languageId === "markdown") {
            openMarkdownPreviewSideBySide();
        }
    });
}

export function deactivate() {
}
