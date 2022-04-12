---
sidebar_position: 1
id: leading-zero-excel
title: Leading Zero in Excel
---

# Perserving Leading Zero in Excel for UserID

When working with employee ids you may face an issue with leading zeros.

This guide will outline issues with Microsoft Excel and Leading zeros.  Normally Microsoft Excel does not allow leading zeros in the cell unless you place an ‘ in the cell or the data is from a another system with a special coded 0.  This special coded 0 will not be able to be imported into the Registrix system.  The guide will outline a process to allow a leading zero to occur.

You must have the data in a Microsoft XLS file.  This guide will assist you in how to resave the file into a format that can be uploaded into Registrix.

# Procedure

## The Microsoft Excel Steps

Have your finalized Excel document ready with all the data in the columns.

![Docs Version Dropdown](/img/excel/step-01-excel-finalized.jpg)

Perform a SaveAs to a CSV file.

![Docs Version Dropdown](/img/excel/step-02-saveas-excel.jpg)

Once the file is saved, then close this Excel document.  It is best to completely close Excel.

Now locate the CSV file that you just saved in the Windows File Manager and double click on the CSV file.

![Docs Version Dropdown](/img/excel/step-03-excel-doubleclick.jpg)

Excel will open and you will notice the leading zeros are missing. 

![Docs Version Dropdown](/img/excel/step-04-excel-file-open.jpg)

 To correctly place leading you need to highlight the userid column.

![Docs Version Dropdown](/img/excel/step-05-excel-highlight-userid.jpg)

Then right click over the A column after highlighting all the cells and select Format Cells

![Docs Version Dropdown](/img/excel/step-05a-rightclick-formatcells.jpg)

A new window will appear that you can specify the format of this column.  In the Format Cells, select the Number Tab and go down to Custom. In the type field enter the number of zeros that replicate the total number of digits the userid should have.  So if you have a six digit number then enter six zeros.

![Docs Version Dropdown](/img/excel/step-06-excel-format-cells.jpg)

Now click on the OK button.  You will now see zeros at the beginning of the number.  

![Docs Version Dropdown](/img/excel/step-07-excel-showing-zero.jpg)

Now click on the Save icon locate to the upper left of the document.

In the center of the window click on the “Yes” button. 

![Docs Version Dropdown](/img/excel/step-08-excel-save-yes.jpg)