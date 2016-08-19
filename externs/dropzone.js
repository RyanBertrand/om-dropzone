var Dropzone = {};

Dropzone.options = {};
Dropzone.options.accept = function(file, done) {};
Dropzone.options.init = function() {};
Dropzone.options.fallback = function() {};
Dropzone.options.resize = function(file) {};
Dropzone.options.drop = function(e) {};
Dropzone.options.dragend = function(e) {};
Dropzone.options.dragenter = function(e) {};
Dropzone.options.dragover = function(e) {};
Dropzone.options.dragleave = function(e) {};
Dropzone.options.reset = function() {};
Dropzone.options.addedfile = function(file) {};
Dropzone.options.removedfile = function(file) {};
Dropzone.options.thumbnail = function(file, dataUrl) {};
Dropzone.options.error = function(file, message) {};
Dropzone.options.processing = function(file) {};
Dropzone.options.uploadprogress = function(file, progress, bytesSent) {};
Dropzone.options.success = function(file) {};
Dropzone.options.canceled = function(file) {};
Dropzone.options.complete = function(file) {};

Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {};
Dropzone.prototype.getRejectedFiles = function() {};
Dropzone.prototype.getAcceptedFiles = function() {};
Dropzone.prototype.getFilesWithStatus = function(status) {};
Dropzone.prototype.getQueuedFiles = function() {};
Dropzone.prototype.getUploadingFiles = function() {};
Dropzone.prototype.getActiveFiles = function() {};
Dropzone.prototype.init = function() {};
Dropzone.prototype.destroy = function() {};
Dropzone.prototype.updateTotalUploadProgress = function() {};
Dropzone.prototype.getFallbackForm = function() {};
Dropzone.prototype.getExistingFallback = function() {};
Dropzone.prototype.setupEventListeners = function() {};
Dropzone.prototype.removeEventListeners = function() {};
Dropzone.prototype.disable = function() {};
Dropzone.prototype.enable = function() {};
Dropzone.prototype.filesize = function(size) {};
Dropzone.prototype.drop = function(e) {};
Dropzone.prototype.paste = function(e) {};
Dropzone.prototype.handleFiles = function(files) {};
Dropzone.prototype.accept = function(file, done) {};
Dropzone.prototype.addFile = function(file) {};
Dropzone.prototype.enqueueFiles = function(files) {};
Dropzone.prototype.enqueueFile = function(file) {};
Dropzone.prototype.removeFile = function(file) {};
Dropzone.prototype.removeAllFiles = function(cancelIfNecessary) {};
Dropzone.prototype.createThumbnail = function(file, callback) {};
Dropzone.prototype.processQueue = function() {};
Dropzone.prototype.processFile = function(file) {};
Dropzone.prototype.processFiles = function(files) {};
Dropzone.prototype.cancelUpload = function(file) {};
Dropzone.prototype.uploadFile = function(file) {};
Dropzone.prototype.uploadFiles = function(files) {};

var Emitter = {};
Emitter.prototype.on = function(event, fn) {};
Emitter.prototype.addEventListener = function(event, fn){};
Emitter.prototype.once = function(event, fn){};
Emitter.prototype.off = function(event, fn) {};
Emitter.prototype.removeListener = function(event, fn) {};
Emitter.prototype.removeAllListeners = function(event, fn) {};
Emitter.prototype.removeEventListener = function(event, fn){};
Emitter.prototype.emit = function(event){};
Emitter.prototype.listeners = function(event){};
Emitter.prototype.hasListeners = function(event){};