/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => main_default
});
module.exports = __toCommonJS(main_exports);

// src/Plugin.ts
var import_obsidian7 = require("obsidian");

// src/Settings.ts
var import_obsidian = require("obsidian");
var _notename = "${notename}";
var _filename = "${filename}";
var _datetime = "${datetime}";
var DEFAULT_SETTINGS = {
  folderName: `${_filename}_Attachments`,
  pastedImageName: `${_notename}-${_datetime}`,
  datetimeFormat: "YYYYMMDDHHmmssSSS",
  hideFolder: false,
  aeroFolder: true,
  autoRenameFolder: true,
  autoRenameFiles: true,
  autoDeleteFolder: false
};
var containsFilenameOrNotename = (settings) => {
  return settings.folderName.contains(_filename) || settings.folderName.contains(_notename);
};
var encode = (text) => {
  const specialCharacters = ["\\$", "\\[", "\\]", "\\{", "\\}", "\\(", "\\)", "\\*", "\\+", "\\.", "\\?", "\\\\", "\\^"];
  const reg = new RegExp("[" + specialCharacters.join("") + "]", "gi");
  return text.replace(reg, (character) => `\\${character}`);
};
var buildFolderRegExp = (settings) => {
  let reg = encode(settings.folderName);
  reg = reg.replace(encode(_filename), ".+").replace(encode(_notename), ".+");
  return new RegExp("^" + reg + "$");
};
var buildFolderName = (settings, fileName, notename) => {
  if (settings.folderName.contains(_filename)) {
    return "./" + settings.folderName.replace(_filename, fileName);
  }
  if (settings.folderName.contains(_notename)) {
    return "./" + settings.folderName.replace(_notename, notename);
  }
  return "./" + settings.folderName;
};
var buildPastedImageName = (settings, notename) => {
  return buildPastedImageNameWithMoment(settings, (0, import_obsidian.moment)(), notename);
};
var buildPastedImageNameWithMoment = (settings, moment3, notename) => {
  const datetime = moment3.format(settings.datetimeFormat);
  return settings.pastedImageName.replace(_notename, notename).replace(_datetime, datetime);
};

// src/SettingTab.ts
var import_obsidian2 = require("obsidian");

// src/lang/zh.ts
var zh_default = {
  "plugin_name": "\u9644\u4EF6\u7BA1\u7406\u5668",
  "settings_folder_name": "\u9644\u4EF6\u6587\u4EF6\u5939",
  "settings_folder_name_desc": "\u9644\u4EF6\u6587\u4EF6\u5939\u7684\u540D\u79F0\uFF0C\u4F7F\u7528\u53D8\u91CF ${filename} \u83B7\u53D6\u7B14\u8BB0\uFF08md/canvas\uFF09\u6587\u4EF6\u540D\u79F0\uFF08\u5305\u542B\u540E\u7F00\uFF09\uFF0C\u4F8B\uFF1A${filename}_Attachments\u3002",
  "settings_pasted_image_file_name": "\u201C\u7C98\u8D34\u56FE\u7247\u201D\u6587\u4EF6\u540D",
  "settings_pasted_image_file_name_desc": "\u201C\u7C98\u8D34\u56FE\u7247\u201D\u4FDD\u5B58\u4E3A\u6587\u4EF6\u7684\u540D\u79F0\uFF0C\u4F7F\u7528\u53D8\u91CF ${notename} \u83B7\u53D6\u7B14\u8BB0\uFF08md/canvas\uFF09\u540D\u79F0\uFF0C\u4F7F\u7528\u53D8\u91CF ${datetime} \u83B7\u53D6\u65F6\u95F4\uFF0C\u4F8B\uFF1A${notename}-${datetime}\u3002",
  "settings_datetime_format": "${datetime} \u683C\u5F0F",
  "settings_datetime_format_desc": "\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\uFF08\u4F7F\u7528 moment.js \u683C\u5F0F\uFF09\uFF0C\u4F8B\uFF1AYYYYMMDDHHmmssSSS\u3002",
  "settings_hide_folder": "\u9690\u85CF\u9644\u4EF6\u6587\u4EF6\u5939",
  "settings_aero_folder": "\u900F\u660E\u9644\u4EF6\u6587\u4EF6\u5939",
  "settings_auto_rename_folder": "\u81EA\u52A8\u91CD\u547D\u540D\u9644\u4EF6\u6587\u4EF6\u5939",
  "settings_auto_rename_folder_desc": "\u7B14\u8BB0\uFF08md/canvas\uFF09\u540D\u79F0\u53D8\u5316\u65F6\uFF0C\u5982\u679C\u9644\u4EF6\u6587\u4EF6\u5939\u540D\u79F0\u4E2D\u5305\u542B\u201C${filename}\u201D\uFF0C\u81EA\u52A8\u91CD\u547D\u540D\u9644\u4EF6\u6587\u4EF6\u5939\u3002",
  "settings_auto_rename_files": "\u81EA\u52A8\u91CD\u547D\u540D\u9644\u4EF6\u6587\u4EF6",
  "settings_auto_rename_files_desc": "\u7B14\u8BB0\uFF08md/canvas\uFF09\u540D\u79F0\u53D8\u5316\u65F6\uFF0C\u5982\u679C\u9644\u4EF6\u6587\u4EF6\u540D\u79F0\u4E2D\u5305\u542B\u201C${notename}\u201D\uFF0C\u81EA\u52A8\u91CD\u547D\u540D\u9644\u4EF6\u6587\u4EF6\u3002",
  "settings_auto_delete_folder": "\u81EA\u52A8\u5220\u9664\u9644\u4EF6\u6587\u4EF6\u5939",
  "settings_auto_delete_folder_desc": "\u7B14\u8BB0\uFF08md/canvas\uFF09\u5220\u9664\u65F6\uFF0C\u5982\u679C\u9644\u4EF6\u6587\u4EF6\u5939\u540D\u79F0\u4E2D\u5305\u542B\u201C${filename}\u201D\uFF0C\u81EA\u52A8\u5220\u9664\u9644\u4EF6\u6587\u4EF6\u5939\u3002",
  "command_toggle_attachment_folder_visibility": "\u5207\u6362\u9644\u4EF6\u6587\u4EF6\u5939\u7684\u201C\u663E\u793A/\u9690\u85CF\u201D",
  "status_attachment_folder_visibility": "\u9644\u4EF6\u6587\u4EF6\u5939\u5DF2\u9690\u85CF",
  "command_localization_remote_attachments": "\u4E0B\u8F7D\u8FDC\u7A0B\u56FE\u7247",
  "command_localization_remote_attachments_success": "\u4E0B\u8F7D\u6210\u529F\u3002",
  "command_localization_remote_attachments_failure": "\u4E0B\u8F7D\u5931\u8D25\u3002"
};

// src/lang/en.ts
var en_default = {
  "plugin_name": "Attachment Manager",
  "settings_folder_name": "Attachment Folder",
  "settings_folder_name_desc": 'The name of the attachment folder, using the variable ${filename} to get name of the note("md/canvas") file. e.g., ${filename}_Attachments .',
  "settings_pasted_image_file_name": "Pasted Image Name",
  "settings_pasted_image_file_name_desc": '"Pasted Image" file name, using the variable ${notename} to get name of the note("md/canvas"), using the variable ${datetime} to get datetime. e.g., ${notename}-${datetime}) .',
  "settings_datetime_format": "${datetime} Format",
  "settings_datetime_format_desc": "Format for ${datetime} (use moment.js format). e.g., YYYYMMDDHHmmssSSS .",
  "settings_hide_folder": "Hide attachment folder",
  "settings_aero_folder": "Aero attachment folder",
  "settings_auto_rename_folder": "Automatically rename attachment folder",
  "settings_auto_rename_folder_desc": 'When renaming note("md/canvas"), automatically rename attachment folder if folder name contains "${filename}".',
  "settings_auto_rename_files": "Automatically rename attachment files",
  "settings_auto_rename_files_desc": 'When renaming note("md/canvas"), automatically rename attachment files if file name contains "${notename}".',
  "settings_auto_delete_folder": "Automatically delete attachment folder",
  "settings_auto_delete_folder_desc": 'When deleting note("md/canvas"), automatically delete attachment folder if folder name contains "${filename}".',
  "command_toggle_attachment_folder_visibility": "Toggle visibility of attachment folder",
  "status_attachment_folder_visibility": "Attachment folder are hidden.",
  "command_localization_remote_attachments": "Download remote images",
  "command_localization_remote_attachments_success": "download success.",
  "command_localization_remote_attachments_failure": "download failure."
};

// src/lang/index.ts
var lang = {
  en: en_default,
  zh: zh_default,
  get(key, ...args) {
    const language = window.localStorage.getItem("language") || "en";
    const _lang = this[language] || en_default;
    let text = _lang[key] || key;
    if (args) {
      for (let i = 0; i < args.length; i++) {
        text = text.replace(new RegExp(`\\{\\{${i}\\}\\}`, "g"), args[i]);
      }
    }
    return text;
  }
};

// src/SettingTab.ts
var SettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_folder_name")).setDesc(lang.get("settings_folder_name_desc")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.folderName).setValue(this.plugin.settings.folderName).onChange(async (value) => {
      value = (0, import_obsidian2.normalizePath)(value);
      this.plugin.settings.folderName = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_pasted_image_file_name")).setDesc(lang.get("settings_pasted_image_file_name_desc")).addText((text) => text.setPlaceholder(DEFAULT_SETTINGS.pastedImageName).setValue(this.plugin.settings.pastedImageName).onChange(async (value) => {
      this.plugin.settings.pastedImageName = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_datetime_format")).setDesc(lang.get("settings_datetime_format_desc")).addMomentFormat((text) => text.setDefaultFormat(DEFAULT_SETTINGS.datetimeFormat).setValue(this.plugin.settings.datetimeFormat).onChange(async (value) => {
      this.plugin.settings.datetimeFormat = value;
      await this.plugin.saveSettings();
    }));
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_hide_folder")).addToggle((toggle) => toggle.setValue(this.plugin.settings.hideFolder).onChange(async (value) => {
      this.plugin.settings.hideFolder = value;
      await this.plugin.saveSettings();
      await this.plugin.hideFolder.refresh();
    }));
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_aero_folder")).addToggle((toggle) => toggle.setValue(this.plugin.settings.aeroFolder).onChange(async (value) => {
      this.plugin.settings.aeroFolder = value;
      await this.plugin.saveSettings();
      await this.plugin.hideFolder.refresh();
    }));
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_auto_rename_folder")).setDesc(lang.get("settings_auto_rename_folder_desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.autoRenameFolder).onChange(async (value) => {
      this.plugin.settings.autoRenameFolder = value;
      await this.plugin.saveSettings();
    }));
    if (this.plugin.settings.autoRenameFolder)
      new import_obsidian2.Setting(containerEl).setName(lang.get("settings_auto_rename_files")).setDesc(lang.get("settings_auto_rename_files_desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.autoRenameFiles).onChange(async (value) => {
        this.plugin.settings.autoRenameFiles = value;
        await this.plugin.saveSettings();
      }));
    new import_obsidian2.Setting(containerEl).setName(lang.get("settings_auto_delete_folder")).setDesc(lang.get("settings_auto_delete_folder_desc")).addToggle((toggle) => toggle.setValue(this.plugin.settings.autoDeleteFolder).onChange(async (value) => {
      this.plugin.settings.autoDeleteFolder = value;
      await this.plugin.saveSettings();
    }));
  }
};

// src/components/VaultAttachmentConfiguration.ts
var VaultAttachmentConfiguration = class {
  constructor(vault) {
    this.key = "attachmentFolderPath";
    this.key2 = "newLinkFormat";
    this.vault = vault;
  }
  backup() {
    this._value = this.vault.getConfig(this.key);
    this._value2 = this.vault.getConfig(this.key2);
    if (this._value2 !== "relative" && this._value2 !== "shortest") {
      this.vault.setConfig(this.key2, "relative");
    }
  }
  update(value) {
    this.vault.setConfig(this.key, value);
  }
  restore() {
    this.vault.setConfig(this.key, this._value);
    this.vault.setConfig(this.key2, this._value2);
  }
};

// src/handler/FileOpenHandler.ts
var FileOpenHandler = class {
  static build(plugin) {
    const handler = new FileOpenHandler(plugin);
    return handler.handle.bind(handler);
  }
  constructor(plugin) {
    this.plugin = plugin;
    this.vaultAttachmentConfiguration = plugin.vaultAttachmentConfiguration;
  }
  async handle(file) {
    if (file == null) {
      return;
    }
    if (file.extension !== "md" && file.extension !== "canvas") {
      return;
    }
    this.vaultAttachmentConfiguration.update(buildFolderName(this.plugin.settings, file.name, file.basename));
  }
};

// src/handler/DeleteHandler.ts
var Path = __toESM(require("path/posix"));
var DeleteHandler = class {
  static build(plugin) {
    const handler = new DeleteHandler(plugin);
    return handler.handle.bind(handler);
  }
  constructor(plugin) {
    this.vault = plugin.app.vault;
    this.plugin = plugin;
    this.adapter = plugin.adapter;
    this.vaultAttachmentConfiguration = plugin.vaultAttachmentConfiguration;
  }
  async handle(file) {
    if (file.extension !== "md" && file.extension !== "canvas") {
      return;
    }
    if (!containsFilenameOrNotename(this.plugin.settings) || !this.plugin.settings.autoDeleteFolder) {
      return;
    }
    const folderPath = Path.join(Path.dirname(file.path), buildFolderName(this.plugin.settings, file.name, file.basename));
    if (await this.adapter.exists(folderPath)) {
      const trashOption = this.vault.getConfig("trashOption");
      if (trashOption === "system") {
        await this.adapter.trashSystem(folderPath);
      } else if (trashOption === "local") {
        await this.adapter.trashLocal(folderPath);
      } else {
        await this.adapter.remove(folderPath);
      }
    }
  }
};

// src/handler/RenameHandler.ts
var import_obsidian3 = require("obsidian");
var Path2 = __toESM(require("path/posix"));
var RenameHandler = class {
  static build(plugin) {
    const handler = new RenameHandler(plugin);
    return handler.handle.bind(handler);
  }
  constructor(plugin) {
    this.vault = plugin.app.vault;
    this.plugin = plugin;
    this.adapter = plugin.adapter;
    this.fileManager = plugin.app.fileManager;
    this.vaultAttachmentConfiguration = plugin.vaultAttachmentConfiguration;
  }
  async handle(newFile, oldFilePath) {
    if (!(newFile instanceof import_obsidian3.TFile)) {
      return;
    }
    if (newFile.extension !== "md" && newFile.extension !== "canvas") {
      return;
    }
    if (!containsFilenameOrNotename(this.plugin.settings) || !this.plugin.settings.autoRenameFolder) {
      return;
    }
    const newFolderName = buildFolderName(this.plugin.settings, newFile.name, newFile.basename);
    this.vaultAttachmentConfiguration.update(newFolderName);
    const newFolderPath = (0, import_obsidian3.normalizePath)(Path2.join(Path2.dirname(newFile.path), newFolderName));
    const oldFileParsedPath = Path2.parse(oldFilePath);
    const oldFolderPath = (0, import_obsidian3.normalizePath)(Path2.join(Path2.dirname(oldFilePath), buildFolderName(this.plugin.settings, oldFileParsedPath.base, oldFileParsedPath.name)));
    await this._renameFolder(oldFolderPath, newFolderPath);
    if (!this.plugin.settings.autoRenameFiles) {
      return;
    }
    await this._renameFiles(newFolderPath, newFile.basename, Path2.basename(oldFilePath, "." + newFile.extension));
  }
  async _renameFolder(oldFolderPath, newFolderPath) {
    if (!await this.adapter.exists(oldFolderPath) || oldFolderPath === newFolderPath) {
      return;
    }
    const oldFolder = this.vault.getAbstractFileByPath(oldFolderPath);
    if (oldFolder == null) {
      return;
    }
    const newFolderParentPath = Path2.dirname(newFolderPath);
    if (!await this.adapter.exists(newFolderParentPath)) {
      await this.vault.createFolder(newFolderParentPath);
    }
    await this.fileManager.renameFile(oldFolder, newFolderPath);
    const oldFolderParentPath = Path2.dirname(oldFolderPath);
    const oldFolderParentListedFiles = await this.adapter.list(oldFolderParentPath);
    if (oldFolderParentListedFiles.folders.length === 0 && oldFolderParentListedFiles.files.length === 0) {
      await this.adapter.rmdir(oldFolderParentPath, true);
    }
  }
  async _renameFiles(newFolderPath, newFileName, oldFileName) {
    const attachmentFiles = (await this.adapter.list(newFolderPath)).files;
    for (const file of attachmentFiles) {
      let attachmentFileName = Path2.basename(file);
      if (!attachmentFileName.contains(oldFileName)) {
        continue;
      }
      attachmentFileName = attachmentFileName.replace(oldFileName, newFileName);
      const newFilePath = (0, import_obsidian3.normalizePath)(Path2.join(newFolderPath, attachmentFileName));
      const attachmentFile = this.vault.getAbstractFileByPath(file);
      if (attachmentFile == null) {
        continue;
      }
      await this.fileManager.renameFile(attachmentFile, newFilePath);
    }
  }
};

// src/components/HideFolder.ts
var import_obsidian4 = require("obsidian");
var HideFolder = class {
  constructor(plugin) {
    this.plugin = plugin;
  }
  load() {
    this.ribbonIconButton = this.plugin.addRibbonIcon(
      this.plugin.settings.hideFolder ? "eye-off" : "eye",
      lang.get("command_toggle_attachment_folder_visibility"),
      (evt) => {
        this.plugin.settings.hideFolder = !this.plugin.settings.hideFolder;
        this.plugin.saveSettings();
        this.refresh();
      }
    );
    this.statusBarItem = this.plugin.addStatusBarItem();
    this.statusBarItem.setText(this.plugin.settings.hideFolder ? lang.get("status_attachment_folder_visibility") : "");
    this.plugin.addCommand({
      id: "toggle-attachment-folder_visibility",
      name: lang.get("command_toggle_attachment_folder_visibility"),
      callback: () => {
        this.plugin.settings.hideFolder = !this.plugin.settings.hideFolder;
        this.plugin.saveSettings();
        this.refresh();
      }
    });
    this.mutationObserver = new MutationObserver((mutationRecord) => {
      mutationRecord.forEach((record) => {
        var _a, _b;
        if ((_b = (_a = record.target) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.classList.contains("nav-folder")) {
          this.refreshFolders();
        }
      });
    });
    this.mutationObserver.observe(window.document, { childList: true, subtree: true });
  }
  async refresh() {
    (0, import_obsidian4.setIcon)(this.ribbonIconButton, this.plugin.settings.hideFolder ? "eye-off" : "eye");
    this.statusBarItem.setText(this.plugin.settings.hideFolder ? lang.get("status_attachment_folder_visibility") : "");
    await this.refreshFolders();
  }
  async refreshFolders() {
    const filter = buildFolderRegExp(this.plugin.settings);
    const folders = document.querySelectorAll(".nav-folder-title-content");
    folders.forEach((folder) => {
      var _a, _b, _c, _d, _e, _f, _g, _h;
      const folderName = folder.innerHTML;
      if (filter.test(folderName)) {
        if (this.plugin.settings.hideFolder) {
          (_b = (_a = folder.parentElement) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.addClass("hide-attachment-folder");
        } else {
          (_d = (_c = folder.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.removeClass("hide-attachment-folder");
        }
        if (this.plugin.settings.aeroFolder) {
          (_f = (_e = folder.parentElement) == null ? void 0 : _e.parentElement) == null ? void 0 : _f.addClass("aero-attachment-folder");
        } else {
          (_h = (_g = folder.parentElement) == null ? void 0 : _g.parentElement) == null ? void 0 : _h.removeClass("aero-attachment-folder");
        }
      }
    });
  }
  unload() {
    this.mutationObserver.disconnect();
  }
};

// src/handler/CreateHandler.ts
var import_obsidian5 = require("obsidian");
var Path3 = __toESM(require("path/posix"));
var CreateHandler = class {
  static build(plugin) {
    const handler = new CreateHandler(plugin);
    return handler.handle.bind(handler);
  }
  constructor(plugin) {
    this.vault = plugin.app.vault;
    this.plugin = plugin;
    this.workspace = plugin.app.workspace;
    this.fileManager = plugin.app.fileManager;
    this.vaultAttachmentConfiguration = plugin.vaultAttachmentConfiguration;
  }
  async handle(file) {
    if (!(file instanceof import_obsidian5.TFile)) {
      return;
    }
    if (!file.name.startsWith("Pasted image ")) {
      return;
    }
    const activeView = this.workspace.getActiveViewOfType(import_obsidian5.TextFileView);
    const activeFile = activeView == null ? void 0 : activeView.file;
    if (!activeFile) {
      return;
    }
    if (activeFile.extension !== "md" && activeFile.extension !== "canvas") {
      return;
    }
    const folderPath = Path3.join(Path3.dirname(activeFile.path), buildFolderName(this.plugin.settings, activeFile.name, activeFile.basename));
    if (!file.path.startsWith(folderPath)) {
      return;
    }
    const imagePath = (0, import_obsidian5.normalizePath)(Path3.join(folderPath, buildPastedImageName(this.plugin.settings, activeFile.basename) + "." + file.extension));
    if (activeFile.extension === "md") {
      this._rename4MD(file, imagePath, activeView, activeFile);
    }
    if (activeFile.extension === "canvas") {
      this._rename4Canvas(file, imagePath, activeView);
    }
  }
  async _rename4MD(file, newPath, activeView, activeFile) {
    await this.fileManager.renameFile(file, file.path);
    const oldLinkText = this.fileManager.generateMarkdownLink(file, activeFile.path);
    await this.fileManager.renameFile(file, newPath);
    const newLinkText = this.fileManager.generateMarkdownLink(file, activeFile.path);
    let content = activeView.getViewData();
    content = content.replace(oldLinkText, newLinkText);
    activeView.setViewData(content, false);
  }
  async _rename4Canvas(file, newPath, activeView) {
    const oldPath = file.path;
    await this.fileManager.renameFile(file, newPath);
    let content = activeView.getViewData();
    content = content.replace(`/(file\\s*\\:\\s*\\")${oldPath}(\\")/g`, `$1${newPath}$2`);
    activeView.setViewData(content, false);
  }
};

// src/components/LocalizationAttachments.ts
var import_obsidian6 = require("obsidian");
var Path4 = __toESM(require("path/posix"));
var IMAGE_EXTENSION = {
  "image/apng": "apng",
  "image/avif": "avif",
  "image/bmp": "bmp",
  "image/gif": "gif",
  "image/x-icon": "ico",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/svg+xml": "svg",
  "image/tiff": "tif",
  "image/webp": "webp"
};
var LocalizationAttachments = class {
  constructor(plugin) {
    this.vault = plugin.app.vault;
    this.plugin = plugin;
    this.adapter = plugin.adapter;
    this.workspace = plugin.app.workspace;
    this.fileManager = plugin.app.fileManager;
  }
  load() {
    this.plugin.addCommand({
      id: "localization-remote-attachments",
      name: lang.get("command_localization_remote_attachments"),
      callback: () => {
        this.processActivePage();
      }
    });
  }
  async processActivePage() {
    const activeView = this.workspace.getActiveViewOfType(import_obsidian6.TextFileView);
    const activeFile = activeView == null ? void 0 : activeView.file;
    if (!activeFile) {
      return;
    }
    const folderPath = Path4.join(Path4.dirname(activeFile.path), buildFolderName(this.plugin.settings, activeFile.name, activeFile.basename));
    if (!await this.adapter.exists(folderPath)) {
      await this.vault.createFolder(folderPath);
    }
    if (activeFile.extension === "md") {
      await this._process4MD(activeView, activeFile, folderPath);
      return;
    }
    if (activeFile.extension === "canvas") {
      await this._process4Canvas(activeView, activeFile, folderPath);
      return;
    }
  }
  async _process4MD(activeView, activeFile, folderPath) {
    const content = activeView.getViewData();
    const regex = /!\[(?<anchor>.*?)\]\((?<link>.+?)\)/g;
    const promises = [];
    let timeseed = (0, import_obsidian6.moment)();
    content.replace(regex, (match, anchor, link) => {
      timeseed = timeseed.add(1, "m");
      const imagePath = Path4.join(folderPath, buildPastedImageNameWithMoment(this.plugin.settings, timeseed, activeFile.basename));
      promises.push(this._download4MD(activeFile, match, link, imagePath));
      return match;
    });
    const list = await Promise.all(promises);
    const newContent = content.replace(regex, (match) => {
      const newLink = list.shift();
      return newLink ? newLink : match;
    });
    if (content != newContent) {
      activeView.setViewData(newContent, false);
    }
  }
  async _download4MD(activeFile, match, link, imagePath) {
    if (!this._isUrl(link)) {
      return match;
    }
    const file = await this._download(link, imagePath);
    if (!(file instanceof import_obsidian6.TFile)) {
      return match;
    }
    return this.fileManager.generateMarkdownLink(file, activeFile.path);
  }
  async _process4Canvas(activeView, activeFile, folderPath) {
    const content = JSON.parse(activeView.getViewData());
    const promises = [];
    let timeseed = (0, import_obsidian6.moment)();
    content.nodes.forEach((node) => {
      timeseed = timeseed.add(1, "m");
      const imagePath = Path4.join(folderPath, buildPastedImageNameWithMoment(this.plugin.settings, timeseed, activeFile.basename));
      promises.push(this._download4Canvas(node, imagePath));
    });
    await Promise.all(promises);
    activeView.setViewData(JSON.stringify(content, null, "	"), false);
  }
  async _download4Canvas(node, imagePath) {
    if (node.type !== "link" || !node.url) {
      return;
    }
    const file = await this._download(node.url, imagePath);
    if (!(file instanceof import_obsidian6.TFile)) {
      return;
    }
    node.type = "file";
    delete node.url;
    node.file = file.path;
  }
  _isUrl(url) {
    try {
      return Boolean(new URL(url));
    } catch (_) {
      return false;
    }
  }
  async _download(url, imagePath) {
    return await (0, import_obsidian6.requestUrl)(url).then(async (response) => {
      if (200 != response.status) {
        new import_obsidian6.Notice(`${url} ${lang.get("command_localization_remote_attachments_failure")}`);
        return false;
      }
      const contentType = response.headers["content-type"];
      const extension = IMAGE_EXTENSION[contentType];
      if (!extension) {
        return false;
      }
      const file = await this.vault.createBinary((0, import_obsidian6.normalizePath)(imagePath + "." + extension), response.arrayBuffer);
      new import_obsidian6.Notice(`${url} ${lang.get("command_localization_remote_attachments_success")}`);
      return file;
    });
  }
};

// src/Plugin.ts
var Plugin = class extends import_obsidian7.Plugin {
  async onload() {
    this.adapter = this.app.vault.adapter;
    this.vaultAttachmentConfiguration = new VaultAttachmentConfiguration(this.app.vault);
    this.vaultAttachmentConfiguration.backup();
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
    this.addSettingTab(new SettingTab(this.app, this));
    this.registerEvent(this.app.workspace.on("file-open", FileOpenHandler.build(this)));
    this.registerEvent(this.app.vault.on("create", CreateHandler.build(this)));
    this.registerEvent(this.app.vault.on("rename", RenameHandler.build(this)));
    this.registerEvent(this.app.vault.on("delete", DeleteHandler.build(this)));
    this.hideFolder = new HideFolder(this);
    this.hideFolder.load();
    this.localizationAttachments = new LocalizationAttachments(this);
    this.localizationAttachments.load();
  }
  onunload() {
    this.vaultAttachmentConfiguration.restore();
    this.hideFolder.unload();
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
};

// main.ts
var main_default = Plugin;