import { Output } from "markdown-put";
import * as vscode from "vscode";

export const OUTPUT_IMAGES_COMMAND = "markdown-put-vscode.outputImages";

export const OutputImages = async () => {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showErrorMessage("The editor does not exist.");
    return;
  }

  const documentText = editor.document.getText();
  const workspaceFolder = vscode.workspace.workspaceFolders;

  if (!workspaceFolder) {
    vscode.window.showErrorMessage("The folder does not exist.");
    return;
  }

  try {
    await vscode.window.withProgress(
      {
        title: "Please wait...",
        location: vscode.ProgressLocation.Notification,
      },
      async () => {
        await Output(documentText, workspaceFolder[0].uri.fsPath);
      }
    );
    await vscode.window.showInformationMessage(
      "The process has been completed successfully."
    );
  } catch {
    await vscode.window.showInformationMessage("The process failed.");
  }
};
