import MarkdownIt from "markdown-it";
import * as vscode from "vscode";
import { OUTPUT_IMAGES_COMMAND, OutputImages } from "./commands/OutputImages";
import { Preview } from "markdown-put";

export async function activate(context: vscode.ExtensionContext) {
  // output images
  vscode.commands.registerCommand(OUTPUT_IMAGES_COMMAND, OutputImages);

  // preview
  return {
    extendMarkdownIt(md: MarkdownIt) {
      return md.use(Preview);
    },
  };
}

export function deactivate() {}
