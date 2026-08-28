VIREO HOMEPAGE HERO UPDATE

Upload these files to the ROOT of your existing Vireo GitHub repository and
replace the existing index.html and styles.css when GitHub asks.

This homepage uses the Scottish Highlands photograph supplied by Vireo's
creator as the hero image via its Wikimedia Commons original URL.

IMPORTANT:
- The photo is hosted by Wikimedia Commons and is not bundled in this ZIP.
- Keep the existing photo-credits.html / PHOTO_CREDITS.txt in your repository.
- The homepage links to the existing Vireo pages:
  lake-district.html
  munros.html
  welsh-3000s.html
  peak-district.html
  wainwrights.html
- If your existing repository uses a different filename for a page, change
  the corresponding href in index.html.

The photo URL is:
https://upload.wikimedia.org/wikipedia/commons/0/04/Scottish_Highlands_Mountains.jpg

If you later upload the actual image to GitHub as vireo-hero.jpg, replace the
hero background URL in styles.css with:
url("vireo-hero.jpg")
