
The Task given in GUVI zenclass bootcamp. 
# Pagination
Pagination is the way of displaying the datas to the users with order of pages. We can normally just show the datas to the users line by line continuously like social media posts. But Sometime the data that showing to the users should be organised. At that point pagination method will br helpfull. 

In Pagination method, we show the particular number of data page by pages like google search results. Google search showing results around 10 results per page. If we want go further we can just turn the pages by click the buttons which is linked to the other pages. These type of arrangement of datas called as Pagination.

# In this Repo...

In this repository, I designed a webpage which showing 20 pages of results. According the task which given by guvi zen class, I developed a webpage that showing results by fetching the given API / JSON file in pagination method. From that given data, i get 100 data and i arranged it as showing 5 per page, total 20 pages. 

## Web Page

This Web page is dynamic, if the data source updated and number of results increased as 200, the number of pages also increase automatically. 

![image](https://user-images.githubusercontent.com/84026483/135099457-5b90b134-045e-4d80-9652-e914ff3f23fd.png)
 _Pagination page_



## Approach
-Create HTML ,CSS and JS file and all the basic steps like importing js and css.

### in HTML file...
- The Table and its headings are created in html.
- The content and the page buttons are created and appended by DOM script.
- The next, prev, first and last page buttons initiated in html page.

### In Script file...
- Fetch the data and it returns the promised result of data from the API
- Get the elements from the HTML by DOM and also create elements which to be append
- Create a class for pagination
- The number of buttons should defined at staring so, get the promised result and generate page buttons in constructor of the class so it can invoke when the class object created.
- The next and prev buttons have some condittions. They are,
  - Next Button should be disable and disappear whenever the page comes to end. Same for the prev button at first.
  - Next button should increase the pages by 1 step while the prev button decrease by 1.
- The Next and prev button conditions should be check for each page.
- So the button conditions are invoked in where the display of content process occurs.
- To display the contents make the loop of 5 times while we show 5 data per page.
- In the loop, let i = _variable_ which have the index value of the first data that to be display. So Now, we can change the variable to change the datas. and the loop should be stop in 5 th time of the execution and so the loop condition is i less than the sum of that variable and 5 ( i < _variable_ + 5) and increament is 1 step.
- the logic for next page button is whenever the next button click, the value of _variable_ added with 5 (_variable_ = _variable_ + 5 ). So the page shows the next 5 sets of value.
- Similarly, the prev button decreases the _variable_ with 5 for each clicks. So we can get the previous set of 5 datas can be get.
- Method for page number buttons sets the _variable_ value arccording the page number. 
- In page button generation, the loop should initate with value 0. The Page button logic method should have one argument that will be mutliplied with 5 so we can get the index value of first data according the page number / loop value and this value will assign to _variable_  . and then invoke the display method to refresh the page.

## What i didn't add?
- In this code, we can make more dynamic by get the value from the user that represent the number of data to be shown per page.
- We add conditions to first and last buttons.

## Intentionally did...
- I shown all the page buttons. Beacuse i felt that if i showm only 4 or 5 page navigator buttons per page, it may be not user friendly as this, because if user know that his/her data is placed in 18th page, he can't make it in signle click and he have make 2 or more clicks. So, i shown all the buttons.







