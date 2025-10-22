import os
import argparse
from PIL import Image

def convert_images_to_webp(directory):
    """
    Converts all supported images in a given directory to WebP format
    and deletes the original files upon successful conversion.

    Args:
        directory (str): The path to the directory containing images.
    """
    # Supported image file extensions
    supported_formats = ('.png', '.jpg', '.jpeg', '.bmp', '.tiff')
    
    if not os.path.isdir(directory):
        print(f"Error: Directory not found at '{directory}'")
        return

    print(f"Scanning directory: {directory}\n")

    for filename in os.listdir(directory):
        # Check if the file has a supported extension
        if filename.lower().endswith(supported_formats):
            original_path = os.path.join(directory, filename)
            
            # Create the new filename by replacing the extension with .webp
            file_root, _ = os.path.splitext(filename)
            webp_path = os.path.join(directory, file_root + '.webp')

            print(f"Converting '{filename}'...")

            try:
                # Open the image
                with Image.open(original_path) as img:
                    # Convert and save the image as WebP
                    # The 'quality' parameter can be adjusted (0-100)
                    img.save(webp_path, 'webp', quality=85)
                
                print(f"  -> Successfully saved as '{os.path.basename(webp_path)}'")
                
                # If conversion was successful, delete the original file
                try:
                    os.remove(original_path)
                    print(f"  -> Deleted original file: '{filename}'")
                except OSError as e:
                    print(f"  -> Error: Could not delete original file '{filename}'. {e}")

            except Exception as e:
                print(f"  -> Error: Could not convert '{filename}'. Skipping. Reason: {e}")
            
            print("-" * 20)

    print("\nConversion process finished.")

if __name__ == "__main__":
    # Set up command-line argument parsing
    parser = argparse.ArgumentParser(
        description="Convert images in a target directory to WebP format and delete the originals."
    )
    parser.add_argument(
        "directory",
        type=str,
        help="The path to the directory containing the images to convert."
    )
    
    args = parser.parse_args()
    
    # Run the conversion function with the provided directory
    convert_images_to_webp(args.directory)
