import React, { useState, useRef } from 'react';
import { Upload, X, FileUp, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FileUploadProps {
  accept?: string;
  multiple?: boolean;
  maxSize?: number; // in MB
  onFilesSelected?: (files: File[]) => void;
  className?: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  accept = '.csv,.xlsx,.xls',
  multiple = false,
  maxSize = 10, // Default 10MB
  onFilesSelected,
  className = '',
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const validateFiles = (fileList: FileList) => {
    const validFiles: File[] = [];
    let errorMsg = null;

    Array.from(fileList).forEach((file) => {
      // Check file size
      if (file.size > maxSize * 1024 * 1024) {
        errorMsg = `File ${file.name} exceeds the ${maxSize}MB limit`;
        return;
      }

      // Check file type if accept is specified
      if (accept !== '*') {
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        const acceptedTypes = accept.split(',');
        
        if (!acceptedTypes.some(type => 
          type.trim() === fileExtension || 
          type.trim() === file.type || 
          (type.includes('*') && file.type.startsWith(type.replace('*', '')))
        )) {
          errorMsg = `File ${file.name} is not a supported file type`;
          return;
        }
      }

      validFiles.push(file);
    });

    return { validFiles, errorMsg };
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const { validFiles, errorMsg } = validateFiles(e.dataTransfer.files);
      
      if (errorMsg) {
        setError(errorMsg);
        return;
      }
      
      // Handle single vs multiple
      if (!multiple && validFiles.length > 1) {
        setError('Only one file can be uploaded');
        return;
      }
      
      const newFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(newFiles);
      setError(null);
      
      if (onFilesSelected) {
        onFilesSelected(newFiles);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    if (e.target.files && e.target.files.length > 0) {
      const { validFiles, errorMsg } = validateFiles(e.target.files);
      
      if (errorMsg) {
        setError(errorMsg);
        return;
      }
      
      // Handle single vs multiple
      if (!multiple && validFiles.length > 1) {
        setError('Only one file can be uploaded');
        return;
      }
      
      const newFiles = multiple ? [...files, ...validFiles] : validFiles;
      setFiles(newFiles);
      setError(null);
      
      if (onFilesSelected) {
        onFilesSelected(newFiles);
      }
    }
  };

  const removeFile = (fileToRemove: File) => {
    const updatedFiles = files.filter(file => file !== fileToRemove);
    setFiles(updatedFiles);
    
    if (onFilesSelected) {
      onFilesSelected(updatedFiles);
    }
  };

  const handleButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        className={`relative border-2 border-dashed rounded-lg p-6 ${
          dragActive 
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' 
            : 'border-gray-300 dark:border-gray-700'
        } transition-colors duration-200`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          className="hidden"
          id="file-upload"
        />
        
        <div className="text-center">
          <motion.div 
            className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/40 mb-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Upload className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          </motion.div>
          
          <h3 className="text-lg font-medium text-gray-900 dark:text-white">
            {dragActive ? 'Drop your files here' : 'Upload your files'}
          </h3>
          
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {multiple 
              ? `Drag and drop your files, or click to select files` 
              : `Drag and drop your file, or click to select a file`}
          </p>
          
          <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            {accept === '*' 
              ? 'All file types are supported' 
              : `Supported formats: ${accept}`} 
            {maxSize && ` (Max: ${maxSize}MB)`}
          </p>
          
          <button
            type="button"
            onClick={handleButtonClick}
            className="mt-4 btn btn-primary"
          >
            <FileUp className="mr-2 h-4 w-4" />
            Select Files
          </button>
        </div>
      </div>
      
      {/* Error message */}
      <AnimatePresence>
        {error && (
          <motion.div 
            className="mt-2 text-sm text-red-600 dark:text-red-400"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* File list */}
      {files.length > 0 && (
        <motion.div 
          className="mt-4 space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h4 className="font-medium text-sm text-gray-700 dark:text-gray-300">Selected files:</h4>
          <ul className="space-y-2">
            <AnimatePresence>
              {files.map((file, index) => (
                <motion.li
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white truncate max-w-xs">
                        {file.name}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {(file.size / 1024 / 1024).toFixed(2)}MB
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(file)}
                    className="text-gray-500 hover:text-red-500 dark:text-gray-400"
                    aria-label="Remove file"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default FileUpload;