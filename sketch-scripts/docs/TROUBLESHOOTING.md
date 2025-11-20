# 🔧 Troubleshooting Guide

**Common Issues & Solutions**

---

## 📋 Table of Contents

- [Installation Issues](#installation-issues)
- [Script Execution Problems](#script-execution-problems)
- [Visual Rendering Issues](#visual-rendering-issues)
- [Performance Problems](#performance-problems)
- [Export Issues](#export-issues)
- [Getting Help](#getting-help)

---

## ⚠️ Installation Issues

### Issue: Script Menu Not Found

**Problem:** Can't find "Run Script" in Plugins menu

**Solution:**
1. Verify Sketch version is 53 or higher
   - Go to: Sketch > About Sketch
   - Update if needed
2. Menu location: `Plugins > Run Script...`
3. Keyboard shortcut: `Control + Shift + K`

---

### Issue: Script File Won't Open

**Problem:** Can't select or open .js files

**Solution:**
1. Ensure file extension is `.js` (not `.txt`)
2. Right-click file → Open With → Sketch
3. Or copy script content and paste in Run Script dialog

---

## 🚨 Script Execution Problems

### Issue: "require is not defined"

**Problem:** Error when running script

**Solution:**
```javascript
// Scripts need this at the top:
const sketch = require('sketch');

// Verify it's the first line after comments
```

---

### Issue: Script Runs But Nothing Appears

**Problem:** No artboard created after running

**Solution:**
1. Check if you have a page selected
2. Try creating a new page first
3. Zoom out to see if artboard is outside viewport
   - Press `Cmd + 1` to fit all

**Debug:**
```javascript
// Add at end of script to verify:
console.log('Script executed successfully!');
sketch.UI.message('✅ Done!');
```

---

### Issue: "Cannot read property of undefined"

**Problem:** Error accessing Sketch objects

**Solution:**
1. Ensure Sketch is fully loaded before running
2. Check that document is open
3. Verify page exists:

```javascript
const document = sketch.getSelectedDocument();
if (!document) {
  sketch.UI.message('⚠️ Please open a document first');
  return;
}
```

---

### Issue: Colors Don't Match Expected

**Problem:** Glass effects or colors look different

**Solution:**
1. **Verify color format:**
   ```javascript
   // Correct:
   fills: [{ color: 'rgba(255, 255, 255, 0.4)' }]
   
   // Wrong:
   fills: [{ color: 'rgba(255,255,255,0.4)' }] // No spaces
   ```

2. **Check color space:**
   - Sketch > Preferences > Canvas
   - Color Profile: sRGB IEC61966-2.1

3. **Blur not working:**
   ```javascript
   // Ensure blur is enabled:
   blur: { 
     enabled: true,  // ← Must be true
     radius: 24,
     type: Style.BlurType.Background 
   }
   ```

---

## 🎨 Visual Rendering Issues

### Issue: Blur Effect Not Visible

**Problem:** Glassmorphism doesn't look blurred

**Solution:**
1. **Check View settings:**
   - View > Canvas > Show Pixels (Enable)
   - View > Canvas > GPU Rendering (Enable)

2. **Verify blur settings:**
   ```javascript
   blur: {
     enabled: true,
     radius: 24,  // Try 12-48 range
     type: Style.BlurType.Background
   }
   ```

3. **System requirements:**
   - macOS 10.14+ required for blur
   - GPU must support Metal

---

### Issue: Text Looks Blurry

**Problem:** Text rendering is not sharp

**Solution:**
1. Ensure text is on pixel boundaries:
   ```javascript
   frame: { 
     x: Math.round(100), 
     y: Math.round(200),
     width: Math.round(300),
     height: Math.round(40)
   }
   ```

2. Check zoom level: `View > Zoom to 100%`

---

### Issue: Shadows Not Appearing

**Problem:** Shadow effects invisible

**Solution:**
1. **Verify shadow settings:**
   ```javascript
   shadows: [{
     color: 'rgba(0, 0, 0, 0.1)',  // Check opacity
     blur: 24,                      // Not too small
     x: 0,
     y: 8,                          // Positive Y value
     spread: 0
   }]
   ```

2. **Check layer order:**
   - Shadows render below layer
   - Ensure layer isn't covered

---

### Issue: Hebrew Text Displays Wrong

**Problem:** RTL text shows incorrectly

**Solution:**
1. **Set proper alignment:**
   ```javascript
   style: {
     alignment: Text.Alignment.right,  // For RTL
     textColor: '#111827'
   }
   ```

2. **Use Hebrew-compatible font:**
   ```javascript
   fontFamily: 'SF Pro Display, Arial Hebrew, Arial'
   ```

---

## ⚡ Performance Problems

### Issue: Script Runs Very Slowly

**Problem:** Execution takes several minutes

**Solution:**
1. **Close other applications**
2. **Reduce blur radius:**
   ```javascript
   blur: { radius: 16 }  // Instead of 48
   ```

3. **Simplify gradients:**
   ```javascript
   // Use solid color instead:
   fills: [{ color: '#f6f7fb' }]
   ```

---

### Issue: Sketch Crashes When Running Script

**Problem:** Application crashes or freezes

**Solution:**
1. **Run scripts one at a time**
2. **Restart Sketch between runs**
3. **Check available RAM:**
   - Sketch needs 4GB+ free
4. **Reduce artboard complexity:**
   - Comment out non-essential layers
   - Test in stages

---

## 📤 Export Issues

### Issue: Exported Images Look Different

**Problem:** PNG/SVG exports don't match artboard

**Solution:**
1. **Export settings:**
   - File > Export
   - Format: PNG
   - Scale: @2x or @3x for retina
   - Color Profile: sRGB

2. **For blur effects:**
   - Flatten transparent layers
   - Or export as PDF first

---

### Issue: Can't Export Glassmorphism

**Problem:** Blur effects lost in export

**Solution:**
1. **PNG Export:**
   - Works best for blur effects
   - Use @2x or higher scale

2. **SVG Limitations:**
   - Blur may not export to SVG
   - Consider PNG or PDF instead

3. **Flatten before export:**
   ```
   Layer > Flatten Selection to Bitmap
   ```

---

## 🐛 Common Error Messages

### "TypeError: Cannot read property 'Style' of undefined"

**Solution:**
```javascript
// Change:
const { Style } = sketch;

// To:
const Style = sketch.Style;
```

---

### "ReferenceError: artboard is not defined"

**Solution:**
```javascript
// Ensure artboard is created first:
const artboard = new Artboard({
  name: 'My Screen',
  frame: { x: 0, y: 0, width: 390, height: 844 },
  parent: page
});

// Then use it:
parent: artboard  // ✅ Correct
```

---

### "Error: Invalid color format"

**Solution:**
```javascript
// Correct formats:
'#111827'                      // HEX
'rgba(255, 255, 255, 0.4)'    // RGBA with spaces
'rgb(255, 255, 255)'          // RGB

// Wrong:
'rgba(255,255,255,0.4)'       // No spaces
'#111827ff'                    // 8-digit hex not supported
```

---

## 💬 Getting Help

### Before Asking for Help

1. ✅ Check this troubleshooting guide
2. ✅ Review [API_REFERENCE.md](./API_REFERENCE.md)
3. ✅ Try script on fresh Sketch document
4. ✅ Test with single simple element
5. ✅ Check Sketch console: `Plugins > Custom Plugin > Show JavaScript Context`

### What to Include in Bug Reports

```markdown
**Sketch Version:** 99.0
**macOS Version:** 14.0
**Script File:** 01-SplashScreen.js
**Error Message:** [Full error text]
**Steps to Reproduce:**
1. Open Sketch
2. Run script
3. Error appears

**Expected:** [What should happen]
**Actual:** [What actually happens]
**Screenshots:** [If applicable]
```

---

## 🔍 Debug Mode

### Enable Debug Logging

Add this to any script for debugging:

```javascript
// At the top of script
const DEBUG = true;

function log(message) {
  if (DEBUG) {
    console.log(`[DEBUG] ${message}`);
    sketch.UI.message(message);
  }
}

// Use throughout script:
log('Creating artboard...');
log('Artboard created successfully');
```

---

## 📚 Additional Resources

- [Sketch JavaScript API Docs](https://developer.sketch.com/reference/api/)
- [Sketch Community Forum](https://forum.sketch.com/)
- [Stack Overflow - Sketch Tag](https://stackoverflow.com/questions/tagged/sketch)

---

## ✅ Quick Checklist

When things aren't working:

- [ ] Sketch is version 53 or higher
- [ ] Document is open in Sketch
- [ ] Page is selected
- [ ] Script file is valid .js format
- [ ] First line has `const sketch = require('sketch');`
- [ ] GPU rendering is enabled
- [ ] Sufficient RAM available (4GB+)
- [ ] Script is complete (not truncated)
- [ ] No syntax errors in console
- [ ] Tried restarting Sketch

---

**Still having issues?**  
Open an issue with full details and we'll help! 🚀

**Last Updated: November 17, 2024**

