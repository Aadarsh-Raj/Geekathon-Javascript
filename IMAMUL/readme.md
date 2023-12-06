# Chrome-Extension-YT-Bookmaker
This is the hosted link:[https://rajakhan017.github.io/Chrome-Extension-YT-Bookmaker/]
YT Bookmarker is a Chrome extension that enhances the experience of watching YouTube videos by allowing users to create and manage bookmarks with custom notes at specific timestamps in YouTube videos.

You can find the [published extension in the Chrome Web Store](https://chrome.google.com/webstore/detail/yt-bookmarker/docgcaajjlhikhllnlkfmffciiokggag/related) for installation. It's free to use and only uses local browser storage. No sign-up necessary.
## Steps
![image](https://github.com/rajakhan017/Chrome-Extension-YT-Bookmaker/assets/135150598/20f7d785-e9e9-44fb-ad30-43e4fcc5cc97)


![YT Bookmarker - No Screenshots]
![image](https://github.com/rajakhan017/Chrome-Extension-YT-Bookmaker/assets/135150598/f9b8b80a-ca81-4ae2-92eb-ab9342b2d244)

*No Bookmarks*

![YT Bookmarker - With Screenshots]
![image](https://github.com/rajakhan017/Chrome-Extension-YT-Bookmaker/assets/135150598/59c1473f-cb1b-480d-9e05-2266cc6b3b25)



*With Bookmarks*

![YT Bookmarker - Edit Screenshots]
![image](https://github.com/rajakhan017/Chrome-Extension-YT-Bookmaker/assets/135150598/bd9e67b3-7ccf-469f-8f54-522d113c0c11)

*Edit Bookmarks*


## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Understanding the Code](#understanding-the-code)
- [Resources](#resources)
- [Contributing](#contributing)
- [License](#license)
- [Support](#support)

## Features

1. Create bookmarks with notes
2. View and manage saved bookmarks
3. Easy navigation to specific timestamps
4. Edit existing bookmarks
5. Delete bookmarks

## Getting Started
Follow these steps to set up MovieWhiz on your local machine.

## Prerequisites

- Google Chrome Browser

## Installation
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and then clone this repository:

```
git clone https://github.com/<your username>/video-bookmarker.git
```
2. Open Google Chrome.
3. Go to `chrome://extensions/`.
4. Enable "Developer mode" in the top-right corner.
5. Click "Load unpacked extension" and choose the folder where you saved the cloned repository.

The extension should now appear in your Chrome toolbar.

## Usage

1. Open a YouTube video.
2. Click on the YT Bookmarker icon below the video to create a bookmark. 
3. Click on the YT Bookmarker icon in your Chrome toolbar to access your saved bookmarks.
4. Add & edit notes for your bookmarks, navigate to specific timestamps, and delete single or all bookmarks.

## Understanding the Code

In this section, the main logic of the extension in the `popup.js` script is explained.

- `showEditModal`: Displays the edit modal for editing the bookmark text.
- `saveEditedNote`: Saves the edited bookmark text.
- `showFullNote`: Displays the full note when the truncated note is clicked.
- `addNewBookmark`: Adds a new bookmark element to the list of bookmarks.
- `viewBookmarks`: Displays all saved bookmarks for the current video.
- `onPlay`: Jumps to the timestamp of the clicked bookmark.
- `onEdit`: Opens the edit modal for the clicked bookmark.
- `onDelete`: Deletes the clicked bookmark.
- `onDeleteAll`: Deletes all bookmarks for the current video.
- `setBookmarkAttributes`: Sets the attributes and event listeners for bookmark controls.

## Resources

- [Chrome Developer Documentation](https://developer.chrome.com/docs/extensions/mv3/)


## Contributing
Contributions are always welcome! If you'd like to contribute to this project or have any suggestions, feel free to create a new issue or submit a pull request. 

## To submit a pull request, follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## License

This project is open-source and available .

## Support

If you have any questions or need help getting started, please open an issue in the repository .
connect me here.
