window.QUESTIONS_DATA = [
  {
    "id": 1,
    "type": "multiple",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 class Base {\n2// insert code here\n3}\n4\n5 public class Derived extends Base {\n6\n7\n8\n9\n10\npublic static void main(String[] args) {\nDerived obj = new Derived();\nobj.setNum(3);\nSystem.out.println(&quot;Square = &quot; + obj.getNum() * obj.getNum());\n11}\n12}</code></pre>\nWhich two options, when inserted independently inside class Base, ensure that the class is being properly encapsulated and allow the program to execute and print the square of the number?",
    "options": [
      "2 private int num;\n3\n4 public int getNum() {\n5    return num;\n6}\n7\n8 public void setNum(int num) {\n9   this.num = num;\n10}",
      "2 public int num;\n3\n4 protected public int getNum() {\n5   return num;\n6}\n7\n8 protected public void setNum(int num) {\n9  this.num = num;\n10}",
      "2 private int num;\n3\n4 public int getNum() {\n5   return num;\n6}\n7\n8 private void setNum(int num) {\n9  this.num = num;\n10}",
      "2 protected int num;\n3\n4 public int getNum() {\n5   return num;\n6}\n7\n8 public void setNum(int num) {\n9  this.num = num;\n10}",
      "2 protected int num;\n3\n4 private int getNum() {\n5  return num;\n6}\n7\n8 public void setNum(int num) {\n9  this.num = num;\n10}"
    ],
    "answer": [
      1,
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 2,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 class Overloading {\n2\n3  int x(double d) {\n4    System.out.println(&quot;one&quot;);\n5    return 0;\n6  }\n7\n8  String x(double d) {\n9    System.out.println(&quot;two&quot;);\n10   return null;\n11 }\n12\n13  double x(double d) {\n14  System.out.println(&quot;three&quot;);\n15   return 0.0;\n16 }\n17\n18 public static void main(String args) {\n19 new Overloading().x(4.0);\n20 }\n21}</code></pre>\nWhat is the result?",
    "options": [
      "One",
      "Two",
      "Three",
      "Compilation fails."
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 3,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class Whizlabs {\n2\n3 public static void main(String[] args) {\n4   String s = &quot;A&quot;;\n5\n6   switch (s) {\n7   case &quot;a&quot;:\n8     System.out.println(&quot;simaple A &quot;);\n9   default:\n10    System.out.print(&quot;default &quot;);\n11  case &quot;A&quot;:\n12    System.out.print(&quot;Capital A &quot;);\n13  }\n14 }\n15}</code></pre>\nWhat is the result?",
    "options": [
      "simaple A",
      "Capital A",
      "simaple A default Capital A",
      "simaple A default",
      "Compilation fails."
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 4,
    "type": "multiple",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class CheckingAccount {\n2\n3 public int amount;\n4\n5 public CheckingAccount(int amount) {\n6   this.amount = amount;\n7 }\n8\n9 public int getAmount() {\n10  return amount;\n11}\n12\n13 public void changeAmount(int x) {\n14    amount += x;\n15 }\n16}\n\nAnd given the following main method, located in another class:\n\n1 public static void main(String[] args){\n2 CheckingAccount acct = new CheckingAccount((int) (Math.random() * 1000));\n3 //line n1\n4 System.out.println(acct.getAmount());\n5}</code></pre>\nWhich three lines, when inserted independently at line n1, cause the program to print a 0 balance?",
    "options": [
      "this.amount = 0;",
      "amount = 0;",
      "acct(0);",
      "acct.amount = 0;",
      "acct.getAmount() = 0;",
      "acct.changeAmount(0);",
      "acct.changeAmount(-acct.amount);",
      "acct.changeAmount(-acct.getAmount());"
    ],
    "answer": [
      4,
      7,
      8
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 5,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class Test {\n2\n3 static String[][] arr = new String[3][];\n4\n5 private static void doPrint() {\n6 //insert code here\n7 }\n8\n9 public static void main(String[] args) {\n10 String[] class1 = {&quot;A&quot;, &quot;B&quot;, &quot;C&quot;};\n11 String[] class2 = {&quot;L&quot;, &quot;M&quot;, &quot;N&quot;, &quot;O&quot;};\n12 String[] class3 = {&quot;I&quot;, &quot;J&quot;};\n13   arr[0] = class1;\n14   arr[1] = class2;\n15   arr[2] = class3;\n16   Test.doPrint();\n17 }\n18}</code></pre>\nWhich code fragment, when inserted at line //insert code here, enables the code to print COJ?",
    "options": [
      "6 int i = 0;\n7 for (String[] sub: arr) {\n8 int j = sub.length - 1;\n9 for (String str: sub) {\n10   System.out.println(str[j]);\n11   i++;\n12 }\n13}",
      "6 for (int i = 0; i < arr.length; i++) {\n7 int j = arr[i].length - 1;\n8 System.out.print(arr[i][j]);\n9}",
      "6 int i = 0;\n7 for (String[] sub: arr[][]) {\n8 int j = sub.length;\n9\tSystem.out.print(arr[i][j]);\n10      i++;\n11}",
      "6 for (int i = 0; i < arr.length - 1; i++) {\n7  int j = arr[i].length - 1;\n8  System.out.print(arr[i][j]);\n9  i++;\n10}"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 6,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">2 public static void main(String[] args) {\n3 int ii = 0;\n4 int jj = 7;\n5 for (ii = 0; ii &lt; jj - 1; ii = ii + 2) {\n6   System.out.print(ii + &quot; &quot;);\n7 }\n8}</code></pre>\nWhat is the result?",
    "options": [
      "2 4",
      "0 2 4 6",
      "0 2 4",
      "Compilation fails"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 7,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class MyFor3 {\n2\n3 public static void main(String[] args) {\n4 int[] xx = null;\n5 for (int ii: xx) {\n6     System.out.println(ii);\n7   }\n8  }\n9}</code></pre>\nWhat is the result?",
    "options": [
      "null",
      "Compilation fails",
      "An exception is thrown at runtime",
      "0"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 8,
    "type": "single",
    "question": "Given: TestApp.java\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class TestApp {\n2   public static void main(String[] args) {\n3     TestApp t = new TestApp();\n4     try {\n5       t.doPrint();\n6       t.doList();\n7     } catch (Exception e2) {\n8       System.out.println(&quot;Caught &quot; + e2);\n9     }\n10 }\n11 public void doList() throws Exception {\n12    throw new Error(&quot;Error&quot;);\n13 }\n14 public void doPrint() throws Exception {\n15    throw new RuntimeException(&quot;Exception&quot;);\n16 }\n17}</code></pre>\nWhat is the result?",
    "options": [
      "Caught java.lang.RuntimeException: Exception\nException in thread \"main\" java.lang.Error: Error\nat TestApp.doList(TestApp.java: 14)\nat TestApp.main(TestApp.java: 6)",
      "Exception in thread \"main\" java.lang.Error: Error\nat TestApp.doList(TestApp.java: 14)\nat TestApp.main(TestApp.java: 6)",
      "Caught java.lang.RuntimeException: Exception\nCaught java.lang.Error: Error",
      "Caught java.lang.RuntimeException: Exception"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 9,
    "type": "single",
    "question": "Which of the following will print current time?",
    "options": [
      "System.out.print(new LocalTime().now());",
      "System.out.print(new LocalTime());",
      "System.out.print(LocalTime.now());",
      "System.out.print(LocalTime.today());",
      "None of the above."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 10,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class Test {\n2\n3  public static void main(String[] args) {\n4   if (args[0].equals(&quot;Hello&quot;) ? false : true) {\n5      System.out.println(&quot;Success&quot;);\n6   } else {\n7      System.out.println(&quot;Failure&quot;);\n8   }\n9  }\n10}\n\nAnd given the commands:\njavac Test.java\njava Test Hello</code></pre>\nWhat is the result?",
    "options": [
      "Success",
      "Failure",
      "Compilation fails.",
      "An exception is thrown at runtime"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 11,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 class Cake {\n2\n3  int model;\n4  String flavor;\n5\n6  Cake() {\n7    model = 0;\n8    flavor = &quot;Unknown&quot;;\n9 }\n10}\n11\n12 public class Test {\n13\n14 public static void main(String[] args) {\n15   Cake c = new Cake();\n16   bake1(c);\n17   System.out.println(c.model + &quot; &quot; + c.flavor);\n18   bake2(c);\n19   System.out.println(c.model + &quot; &quot; + c.flavor);\n20 }\n21\n22 public static Cake bake1(Cake c) {\n23   c.flavor = &quot;Strawberry&quot;;\n24   c.model = 1200;\n25   return c;\n26 }\n27\n28 public static void bake2(Cake c) {\n29   c.flavor = &quot;Chocolate&quot;;\n30   c.model = 1230;\n31   return;\n32 }\n33}</code></pre>\nWhat is the result?",
    "options": [
      "0 unknown\n   0 unknown",
      "1200 Strawberry\n   1200 Strawberry",
      "1200 Strawberry\n   1230 Chocolate",
      "Compilation fails"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 12,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">5 int i, j = 0;\n6 i = (3 * 2 + 4 + 5);\n7 j = (3 * ((2 + 4) + 5));\n8 System.out.println(&quot;i:&quot; + i + &quot; j:&quot; + j);</code></pre>\nWhat is the result?",
    "options": [
      "i:16\nj:33",
      "i:15\nj:33",
      "i:33\nj:23",
      "i:15\nj:23"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 13,
    "type": "multiple",
    "question": "Which two actions will improve the encapsulation of a class?",
    "options": [
      "Changing the access modifier of a field from public to private",
      "Removing the public modifier from a class declaration",
      "Changing the return type of a method to void",
      "Returning a copy of the contents of an array or ArrayList instead of a direct reference"
    ],
    "answer": [
      1,
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 14,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">6 float x = 22.00f % 3.00f;\n7 int y = 22 % 3;\n8 System.out.print(x + &quot;, &quot; + y);</code></pre>\nWhat is the result?",
    "options": [
      "1.0, 1",
      "1.0f, 1",
      "7.33, 7",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 15,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class Equal {\n2\n3  public static void main(String[] args) {\n4    String str1 = &quot;Java&quot;;\n5    String[] str2 = {&quot;J&quot;, &quot;a&quot;, &quot;v&quot;, &quot;a&quot;};\n6    String str3 = &quot;&quot;;\n7    for (String str : str2) {\n8      str3 = str3 + str;\n9    }\n10   boolean b1 = (str1 == str3);\n11   boolean b2 = (str1.equals(str3));\n12   System.out.print(b1 + &quot;, &quot; + b2);\n13  }\n14 }</code></pre>\nWhat is the result?",
    "options": [
      "true, false",
      "false, true",
      "true, true",
      "false, false"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 16,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class MyClass {\n2\n3  public static void main(String[] args) {\n4    String s = &quot; Java Duke &quot;;\n5    int len = s.trim().length();\n6    System.out.print(len);\n7  }\n8 }</code></pre>\nWhat is the result?",
    "options": [
      "8",
      "9",
      "11",
      "10",
      "Compilation fails"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 17,
    "type": "single",
    "question": "The protected modifier on a Field declaration within a public class means that the field __________ .",
    "options": [
      "Cannot be modified",
      "Can be read but not written from outside the class",
      "Can be read and written from this class and its subclasses only within the same package",
      "Can be read and written from this class and its subclasses defined in any package"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 18,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">3 class Student {\n4\n5  int rollnumber;\n6  String name;\n7  List cources = new ArrayList();\n8\n9  // insert code here\n10\n11 public String toString() {\n12   return rollnumber + &quot; : &quot; + name + &quot; : &quot; + cources;\n13 }\n14 }\nAnd,\n\n20 public class Test {\n21\n22  public static void main(String[] args) {\n23    List cs = new ArrayList();\n24    cs.add(&quot;Java&quot;);\n25    cs.add(&quot;C&quot;);\n26    Student s = new Student(123, &quot;Fred&quot;, cs);\n27    System.out.println(s);\n28  }\n29 }</code></pre>\nWhich code fragment, when inserted at line // insert code here, enables class Test to print 123 : Fred : [Java, C]?",
    "options": [
      "9 private Student(int i, String name, List cs) {\n10 /* initialization code goes here */\n11 }",
      "9 public void Student(int i, String name, List cs) {\n10 /* initialization code goes here */\n11 }",
      "9 Student(int i, String name, List cs) {\n10 /* initialization code goes here */\n11 }",
      "9 Student(int i, String name, ArrayList cs) {\n10 /* initialization code goes here */\n11 }"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 19,
    "type": "multiple",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class Circle {\n2\n3  double radius;\n4  public double area;\n5\n6  public Circle(double r) {\n7    radius = r;\n8  }\n9\n10 public double getRadius() {\n11   return radius;\n12 }\n13\n14 public void setRadius(double r) {\n15   radius = r;\n16 }\n17\n18 public double getArea() {\n19   return /* ??? */;\n20 }\n21 }\n22\n23 class App {\n24\n25  public static void main(String[] args) {\n26    Circle c1 = new Circle(17.4);\n27    c1.area = Math.PI * c1.getRadius() * c1.getRadius();\n28  }\n29 }</code></pre>\nThe class is poorly encapsulated. You need to change the circle class to compute and return the area instead. Which two modifications are necessary to ensure that the class is being properly encapsulated?",
    "options": [
      "Remove the area field.",
      "Change the getArea( ) method as follows: public double getArea ( ) { return Math.PI * radius * radius; }",
      "Add the following method: public double getArea ( ) { area = Math.PI * radius * radius; }",
      "Change the cacess modifier of the SerRadius ( ) method to be protected."
    ],
    "answer": [
      1,
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 20,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1 public class Series {\n2\n3  public static void main(String[] args) {\n4    int arr[] = {1, 2, 3};\n5    for (int var : arr) {\n6      int i = 1;\n7      while (i &lt;= var);\n8      System.out.println(i++);\n9    }\n10  }\n11 }</code></pre>\nWhat is the result?",
    "options": [
      "1 1 1",
      "1 2 3",
      "2 3 4",
      "Compilation fails",
      "The loop executes infinite times"
    ],
    "answer": [
      5
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 21,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class Product {\n  double price;\n}\n\npublic class Test {\n  public void updatePrice(Product product, double price) {\n    price = price * 2;\n    product.price = product.price + price;\n  }\n\n  public static void main(String[] args) {\n    Product prt = new Product();\n    prt.price = 200;\n    double newPrice = 100;\n\n    Test t = new Test();\n    t.updatePrice(prt, newPrice);\n    System.out.println(prt.price + &quot; : &quot; + newPrice);\n  }\n}</code></pre>\nWhat is the result?",
    "options": [
      "200.0 : 100.0",
      "400.0 : 200.0",
      "400.0 : 100.0",
      "Compilation fails."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 22,
    "type": "multiple",
    "question": "Given the following segment of code:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">ArrayList&lt;Vehicle&gt; myList = new ArrayList&lt;&gt;();\nmyList.add(new Motorcycle());</code></pre>\nWhich two statements, if either were true, would make the code compile?",
    "options": [
      "Vehicle is an interface that is implemented by the Motorcycle class.",
      "Vehicle and Motorcycle both implement the Transportation interface",
      "Vehicle is a superclass of Motorcycle.",
      "Motorcycle is a superclass of Vehicle.",
      "Vehicle and Motorcycle both extend the Transportation superclass.",
      "Motorcycle is an interface that implements the Vehicle class."
    ],
    "answer": [
      1,
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 23,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n  String date = LocalDate\n                .parse(&quot;2014-05-04&quot;)\n                .format(DateTimeFormatter.ISO_DATE_TIME);\n  System.out.println(date);\n}</code></pre>\nWhat is the result?",
    "options": [
      "May 04, 2014T00:00:00.000",
      "2014-05-04T00:00:00.000",
      "5/4/14T00:00:00.000",
      "An exception is thrown at runtime."
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 24,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n  Short s1 = 200;\n  Integer s2 = 400;\n  Long s3 = (long) s1 + s2;            //line n1\n  String s4 = (String) (s3 * s2);      //line n2\n  System.out.println(&quot;Sum is &quot; + s4);\n}</code></pre>\nWhat is the result?",
    "options": [
      "Sum is 600",
      "Compilation fails at line n1.",
      "Compilation fails at line n2.",
      "A ClassCastException is thrown at line n1.",
      "A ClassCastException is thrown at line n2."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 25,
    "type": "single",
    "question": "What is the name of the Java concept that uses access modifiers to protect variables and hide them within a class?",
    "options": [
      "Encapsulation",
      "Inheritance",
      "Abstraction",
      "Instantiation",
      "Polymorphism"
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 26,
    "type": "multiple",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">abstract class Planet {\n  protected void revolve() {    //line n1\n  }\n  abstract void rotate();       //line n2\n}\n\nclass Earth extends Planet {\n  void revolve() {              //line n3\n  }\n  protected void rotate() {     //line n4\n  }\n}</code></pre>\nWhich two modifications, made independently, enable the code to compile?",
    "options": [
      "Make the method at line n1 public.",
      "Make the method at line n2 public.",
      "Make the method at line n3 public.",
      "Make the method at line n3 protected.",
      "Make the method at line n4 public."
    ],
    "answer": [
      3,
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 27,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class Vehicle {\n    String type = &quot;4W&quot;;\n    int maxSpeed = 100;\n\n    Vehicle(String type, int maxSpeed) {\n        this.type = type;\n        this.maxSpeed = maxSpeed;\n    }\n}\n\nclass Car extends Vehicle {\n    String trans;\n\n    Car(String trans) {         //line n1\n        this.trans = trans;\n    }\n\n    Car(String type, int maxSpeed, String trans) {\n        super(type, maxSpeed);\n        this(trans);      //line n2\n    }\n}\n\nAnd given the code fragment:\n\n7.  Car c1 = new Car(&quot;Auto&quot;);\n8.  Car c2 = new Car(&quot;4W&quot;, 150, &quot;Manual&quot;);\n9.  System.out.println(c1.type + &quot; &quot; + c1.maxSpeed + &quot; &quot; + c1.trans);\n10. System.out.println(c2.type + &quot; &quot; + c2.maxSpeed + &quot; &quot; + c2.trans);</code></pre>\nWhat is the result?",
    "options": [
      "4W 100 Auto 4W 150 Manual",
      "Null 0 Auto 4W 150 Manual",
      "Compilation fails only at line n1",
      "Compilation fails only at line n2",
      "Compilation fails at both line n1 and line n2"
    ],
    "answer": [
      5
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 28,
    "type": "multiple",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">1. class X {\n2.      public void printFileContent() {\n3.          /* code goes here */\n4.          throw new IOException();\n5.      }\n6. }\n7. public class Test {\n8.      public static void main(String[] args) {\n9.          X xobj = new X();\n10.         xobj.printFileContent();\n11.     }\n12. }</code></pre>\nWhich two modifications should you make so that the code compiles successfully?",
    "options": [
      "Replace line 8 with public static void main(String[] args) throws Exception {",
      "Replace line 10 with:\n\ntry {\n    xobj.printFileContent();\n}\ncatch(Exception e) { }\ncatch(IOException e) { }",
      "Replace line 2 with public void printFileContent() throws IOException {",
      "Replace line 4 with throw new IOException(\"Exception raised\");",
      "At line 11, insert throw new IOException();"
    ],
    "answer": [
      1,
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 29,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Customer {\n    ElectricAccount acct = new ElectricAccount();\n\n    public void useElectricity(double kWh) {\n        acct.addkWh(kWh);\n    }\n}\n\npublic class ElectricAccount {\n    private double kWh;\n    private double rate = 0.07;\n    private double bill;\n\n    //line n1\n}\n\nQuestion:</code></pre>\nHow should you write methods in the ElectricAccount class at line n1 so that the member variable bill is always equal to the value of the member variable kWh multiplied by the member variable rate?",
    "options": [
      "public void addkWh(double kWh) {\n    this.kWh += kWh;\n    this.bill = this.kWh * this.rate;\n}",
      "public void addkWh(double kWh) {\n    if (kWh > 0) {\n        this.kWh += kWh;\n        this.bill = this.kWh * this.rate;\n    }\n}",
      "private void addkWh(double kWh) {\n    if (kWh > 0) {\n        this.kWh += kWh;\n        this.bill = this.kWh * this.rate;\n    }\n}",
      "public void addkWh(double kWh) {\n    if (kWh > 0) {\n        this.kWh += kWh;\n        setBill(this.kWh);\n    }\n}\npublic void setBill(double kWh) {\n    bill = kWh * rate;\n}"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 30,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    StringBuilder sb = new StringBuilder(5);\n    String s = &quot;&quot;;\n\n    if (sb.equals(s)) {\n        System.out.println(&quot;Match 1&quot;);\n    } else if (sb.toString().equals(s.toString())) {\n        System.out.println(&quot;Match 2&quot;);\n    } else {\n        System.out.println(&quot;No Match&quot;);\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "Match 1",
      "Match 2",
      "No Match",
      "A NullPointerException is thrown at runtime."
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 31,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">interface Readable {\n    public void readBook();\n    public void setBookMark();\n}\n\nabstract class Book implements Readable {   // line n1\n    public void readBook() { }\n    // line n2\n}\n\nclass EBook extends Book {                  // line n3\n    public void readBook() { }\n    // line n4\n}\n\nAnd given the code fragment:\n\nBook book1 = new EBook();\nbook1.readBook();</code></pre>\nWhich option enables the code to compile? (哪一個選項能使程式碼成功編譯？)",
    "options": [
      "Replace the code fragment at line n1 with:\nclass Book implements Readable {",
      "At line n2 insert:\npublic abstract void setBookMark();",
      "Replace the code fragment at line n3 with:\nabstract class EBook extends Book {",
      "At line n4 insert:\npublic void setBookMark() { }"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 32,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    String ta = &quot;A &quot;;\n    ta = ta.concat(&quot;B &quot;);\n    String tb = &quot;C &quot;;\n    ta = ta.concat(tb);\n    ta.replace(&#x27;C&#x27;, &#x27;D&#x27;);\n    ta = ta.concat(tb);\n    System.out.println(ta);\n}</code></pre>\nWhat is the result?",
    "options": [
      "A B C D",
      "A C D",
      "A B C C",
      "A B D",
      "A B D C"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 33,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class CD {\n    int r;\n    CD(int r) {\n        this.r = r;\n    }\n}\n\nclass DVD extends CD {\n    int c;\n    DVD(int r, int c) {\n        // line n1\n    }\n}\n\nAnd given the code fragment:\n\nDVD dvd = new DVD(10, 20);</code></pre>\nWhich code fragment should you use at line n1 to instantiate the dvd object successfully?",
    "options": [
      "super.r = r;\nthis.c = c;",
      "super(r);\nthis(c);",
      "super(r);\nthis.c = c;",
      "this.c = r;\nsuper(c);"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 34,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int a[] = {1, 2, 3, 4, 5};\nfor(XXX) {\n    System.out.print(a[e]);\n}</code></pre>\nWhich option can replace xxx to enable the code to print 135?",
    "options": [
      "int e = 0; e <= 4; e++",
      "int e = 0; e < 5; e += 2",
      "int e = 1; e <= 5; e += 1",
      "int e = 1; e < 5; e += 2"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 35,
    "type": "single",
    "question": "Which statement best describes encapsulation?",
    "options": [
      "Encapsulation ensures that classes can be designed so that only certain fields and methods of an object are accessible from other objects.",
      "Encapsulation ensures that classes can be designed so that their methods are inheritable.",
      "Encapsulation ensures that classes can be designed with some fields and methods declared as abstract.",
      "Encapsulation ensures that classes can be designed so that if a method has an argument MyType x, any subclass of MyType can be passed to that method."
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 36,
    "type": "single",
    "question": "Given the code fragment from three files:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">SalesMan.java:\n\n\npackage sales;\npublic class SalesMan { }\n\nProduct.java:\n\npackage sales.products;\npublic class Product { }\n\nMarket.java:\n\n1. package market;\n2. // insert code here\n3. public class USMarket {\n4.      SalesMan sm;\n5.      Product p;\n6. }</code></pre>\nWhich code fragment, when inserted at line 2, enables the code to compile?",
    "options": [
      "import sales.*;",
      "import java.sales.products.*;",
      "import sales;\nimport sales.products;",
      "import sales.*;\nimport products.*;",
      "import sales.*;\nimport sales.products.*;"
    ],
    "answer": [
      5
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 37,
    "type": "multiple",
    "question": "Given the following class:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class CheckingAccount {\n    public int amount;\n    public CheckingAccount(int amount) {\n        this.amount = amount;\n    }\n    public int getAmount() {\n        return amount;\n    }\n    public void changeAmount(int x) {\n        amount += x;\n    }\n}\n\nAnd given the following main method, located in another class:\n\npublic static void main(String[] args) {\n    CheckingAccount acct = new CheckingAccount((int) (Math.random() * 1000));\n    // line n1\n    System.out.println(acct.getAmount());\n}</code></pre>\nWhich three lines, when inserted independently at line n1, cause the program to print a 0 balance? (哪三行程式碼分別插入 line n1 時，會使程式印出 0？)",
    "options": [
      "this.amount = 0;",
      "amount = 0;",
      "acct(0);",
      "acct.amount = 0;",
      "acct.getAmount() = 0;",
      "acct.changeAmount(0);",
      "acct.changeAmount(-acct.amount);",
      "acct.changeAmount(-acct.getAmount());"
    ],
    "answer": [
      4,
      7,
      8
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 38,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">String shirts[][] = new String[2][2];\nshirts[0][0] = &quot;red&quot;;\nshirts[0][1] = &quot;blue&quot;;\nshirts[1][0] = &quot;small&quot;;\nshirts[1][1] = &quot;medium&quot;;</code></pre>\nWhich code fragment prints red: blue: small: medium:?",
    "options": [
      "for (int index = 1; index < 2; index++) {\n    for (int idx = 1; idx < 2; idx++) {\n        System.out.print(shirts[index][idx] + \":\");\n    }\n}",
      "for (int index = 0; index < 2; ++index) {\n    for (int idx = 0; idx < index; ++idx) {\n        System.out.print(shirts[index][idx] + \":\");\n    }\n}",
      "for (String c : colors) {\n    for (String s : sizes) {\n        System.out.println(s + \":\");\n    }\n}",
      "for (int index = 0; index < 2;) {\n    for (int idx = 0; idx < 2;) {\n        System.out.print(shirts[index][idx] + \":\");\n        idx++;\n    }\n    index++;\n}"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 39,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Test {\n\n    void readCard(int cardNo) throws Exception {\n        System.out.println(&quot;Reading Card&quot;);\n    }\n\n    void checkCard(int cardNo) throws RuntimeException { // line n1\n        System.out.println(&quot;Checking Card&quot;);\n    }\n\n    public static void main(String[] args) {\n        Test ex = new Test();\n        int cardNo = 12344;\n        ex.checkCard(cardNo);      // line n2\n        ex.readCard(cardNo);       // line n3\n    }\n\n}</code></pre>\nWhat is the result?",
    "options": [
      "Reading Card\nChecking Card",
      "Compilation fails only at line n1.",
      "Compilation fails only at line n2.",
      "Compilation fails only at line n3.",
      "Compilation fails at both line n2 and line n3.\n?"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 40,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">?3.  public static void main(String[] args) {\n5.      int x = 5;\n6.      while (isAvailable(x)) {\n8.          System.out.println(x);\n9.      }\n10.  }\n11. public static boolean isAvailable(int x) { \n12. \treturn x-- &gt; 0 ? true : false; \n13.}</code></pre>\nWhich modification enables the code to print 54321?",
    "options": [
      "Replace line 6 with System.out.print (--x);",
      "At line 7, insert x--;",
      "Replace line 6 with --x; and, at line 7, insert System.out.print (x);",
      "Replace line 12 with return (x > 0) ? false : true;"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 41,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">4.  public static void main(String[] args) {\n5.      boolean opt = true;\n6.      switch (opt) {\n7.          case true:\n8.              System.out.print(&quot;True&quot;);\n9.          break;\n10.         default:\n11.             System.out.print(&quot;****&quot;);\n12.     }\n13.     System.out.println(&quot;Done&quot;);\n14. }</code></pre>\nWhich modification enables the code fragment to print TrueDone?",
    "options": [
      "Replace line 5 with String opt = \"true\"; Replace line 7 with case \"true\":",
      "Replace line 5 with boolean opt = 1; Replace line 7 with case 1:",
      "At line 9, remove the break statement.",
      "Remove the default section."
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 42,
    "type": "single",
    "question": "Given the following main method:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    int num = 5;\n    do {\n        System.out.print(num-- + &quot; &quot;);\n    } while (num == 0);\n}</code></pre>\nWhat is the result?",
    "options": [
      "5 4 3 2 1 0 printed",
      "5 4 3 2 1 printed",
      "4 2 1 printed",
      "5 printed",
      "Nothing is printed"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 43,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int x = 100;\nint a = x++;\nint b = ++x;\nint c = x++;\nint d = (a < b) ? (a < c) ? a : (b < c) ? b : c;\nSystem.out.println(d);</code></pre>\nWhat is the result?",
    "options": [
      "100",
      "101",
      "102",
      "103",
      "Compilation fails"
    ],
    "answer": [
      5
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 44,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Test {\n\n    public static void main(String[] args) {\n\n        String[][] chs = new String[2][]; \n        chs[0] = new String[2]; \n        chs[1] = new String[5]; \n        int i = 97; \n\n       for (int a = 0; a &lt; chs.length; a++) {\n            for (int b = 0; b &lt; chs.length; b++) {               \n                \n                chs[a][b] = &quot;&quot; + i; \n                i++; \n            }\n        }\n\n       for (String[] ca : chs) {            \n            for (String c : ca) {                 \n                System.out.print(c + &quot; &quot;); \n            }\n             System.out.println(); \n        }\n    }\n}</code></pre>\n",
    "options": [
      "97 98\n99 100 null null null",
      "97 98\n99 100 101 102 103",
      "Compilation fails.",
      "A NullPointerException is thrown at runtime.",
      "An ArrayIndexOutOfBoundsException is thrown at runtime."
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 45,
    "type": "multiple",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Employee {\n    String name;\n    boolean contract;\n    double salary;\n\n    Employee() {\n        // line n1\n    }\n\n    public String toString() {\n        return name + &quot;:&quot; + contract + &quot;:&quot; + salary;\n    }\n\n    public static void main(String[] args) {\n        Employee e = new Employee();\n        // line n2\n        System.out.print(e);\n    }\n}</code></pre>\nWhich two modifications, when made independently, enable the code to print joe:true: 100.0?",
    "options": [
      "Replace line n2 with:\ne.name = \"Joe\";\ne.contract = true;\ne.salary = 100;",
      "Replace line n2 with:\nthis.name = \"Joe\";\nthis.contract = true;\nthis.salary = 100;",
      "Replace line n1 with:\nthis.name = new String(\"Joe\");\nthis.contract = new Boolean(true);\nthis.salary = new Double(100);",
      "Replace line n1 with:\nname = \"Joe\";\ncontract = TRUE;\nsalary = 100.0f;",
      "Replace line n1 with:\nthis(\"Joe\", true, 100);"
    ],
    "answer": [
      1,
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 46,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {    \n    List&lt;String&gt; names = new ArrayList&lt;&gt;();\n    \n    names.add(&quot;Robb&quot;);\n    names.add(&quot;Bran&quot;);\n    names.add(&quot;Rick&quot;);\n    names.add(&quot;Bran&quot;);\n   \n    if (names.remove(&quot;Bran&quot;)) { \n       names.remove(&quot;Jon&quot;); \n    }\n    System.out.println(names);\n}</code></pre>\nWhat is the result?",
    "options": [
      "[Robb, Rick, Bran]",
      "[Robb, Rick]",
      "[Robb, Bran, Rick, Bran]",
      "An exception is thrown at runtime."
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 47,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class A {\n    public A() {\n        System.out.print(&quot;A &quot;);\n    }\n}\n\nclass B extends A {\n    public B() {                // line n1\n        System.out.print(&quot;B &quot;);\n    }\n}\n\nclass C extends B {\n    public C() {                // line n2\n        System.out.print(&quot;C &quot;);\n    }\n    public static void main(String[] args) {\n        C c = new C();\n    }\n}</code></pre>\n",
    "options": [
      "C B A",
      "C",
      "A B C",
      "Compilation fails at line n1 and line n2"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 48,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class X {\n    static int i; \n    int j;        \n\n    public static void main(String[] args) {\n        X x1 = new X();\n        X x2 = new X();\n        \n        x1.i = 3; \n        x1.j = 4;\n        x2.i = 5; \n        x2.j = 6;\n        System.out.println(\n            x1.i + &quot; &quot; + \n            x1.j + &quot; &quot; + \n            x2.i + &quot; &quot; + \n            x2.j);\n    }\n}</code></pre>\n",
    "options": [
      "3 4 5 6",
      "3 4 3 6",
      "5 4 5 6",
      "3 6 4 6"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 49,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Test {\n    public static void main(String[] args) {\n        /* insert code here (第 3 行) \n        array[0] = 10; \n        array[1] = 20; \n        System.out.print(array[0] + &quot;:&quot; + array[1]);\n    }\n}</code></pre>\nWhich code fragment, when inserted at line 3, enables the code to print 10:20?",
    "options": [
      "int[] array n = new int[2];",
      "int[] array; array = int[2];",
      "int array[] = new int[2];",
      "int array [2];"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 50,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    String[] arr = {&quot;A&quot;, &quot;B&quot;, &quot;C&quot;, &quot;D&quot;};\n    for (int i = 0; i &lt; arr.length; i++) {\n        System.out.print(arr[i] + &quot; &quot;);\n        if (arr[i].equals(&quot;C&quot;)) {\n            continue;\n        }\n        System.out.println(&quot;Work done&quot;);\n        break;\n    }\n}</code></pre>\n",
    "options": [
      "A B C Work done",
      "A B C D Work done",
      "A Work done",
      "Compilation fails"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 51,
    "type": "multiple",
    "question": "Which three are advantages of the Java exception mechanism?",
    "options": [
      "Improves the program structure because the error handling code is separated from the normal program function.",
      "Provides a set of standard exceptions that covers all the possible errors.",
      "Improves the program structure because the programmer can choose where to handle exceptions.",
      "Improves the program structure because exceptions must be handled in the method in which they occurred.",
      "Allows the creation of new exceptions that are tailored to the particular program being created."
    ],
    "answer": [
      1,
      3,
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 52,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Greeting {\n    public static void main(String[] args) {\n        System.out.println(\"Hello \" + args[0]);\n    }\n}</code></pre>\nWhich set of commands prints Hello Duke?",
    "options": [
      "javac Greeting\njava Greeting Duke",
      "javac Greeting.java Duke\njava Greeting",
      "javac Greeting.java\njava Greeting Duke",
      "javac Greeting.java\njava Greeting.class Duke"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 53,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class Alpha {\n    int ns;\n    static int s;\n    Alpha (int ns) {\n        if (s &lt; ns) {\n            s = ns;\n        }\n        this.ns = ns;\n    }\n    void doPrint() {\n        System.out.println(&quot;ns = &quot; + ns + &quot; s = &quot; + s);\n    }\n}\n\npublic class TestA {\n    public static void main(String[] args) {\n        Alpha ref1 = new Alpha (50);\n        Alpha ref2 = new Alpha (125);\n        Alpha ref3 = new Alpha (100);\n        ref1.doPrint();\n        ref2.doPrint();\n        ref3.doPrint();\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "ns = 50 s = 125, ns = 125 s = 125, ns = 100 s = 125",
      "ns = 50 s = 50, ns = 125 s = 125, ns = 100 s = 100",
      "ns = 50 s = 125, ns = 125 s = 125, ns = 0 s = 125",
      "ns = 50 s = 50, ns = 125 s = 125, ns = 100 s = 125"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 54,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">JavaLocalDate date1 = LocalDate.now();\nLocalDate date2 = LocalDate.of(2014, 6, 20);\nLocalDate date3 = LocalDate.parse(&quot;2014-06-20&quot;, DateTimeFormatter.ISO_DATE);\nSystem.out.println(&quot;date1 = &quot; + date1);\nSystem.out.println(&quot;date2 = &quot; + date2);\nSystem.out.println(&quot;date3 = &quot; + date3);</code></pre>\nAssume that the system date is June 20, 2014. What is the result?",
    "options": [
      "date1 = 2014-06-20, date2 = 2014-06-20, date3 = 2014-06-20",
      "date1 = 06/20/2014, date2 = 2014-06-20, date3 = Jun 20, 2014",
      "Compilation fails.",
      "A DateParseException is thrown at runtime."
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 55,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">7.  StringBuilder sb1 = new StringBuilder(&quot;Duke&quot;);\n8.  String str1 = sb1.toString();\n9.  // insert code here\n10. System.out.print(str1 == str2);</code></pre>\nWhich code fragment, when inserted at line 9, enables the code to print true?",
    "options": [
      "String str2 = str1;",
      "String str2 = new String (str1);",
      "String str2 = sb1.toString();",
      "String str2 = \"Duke\";"
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 56,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Test {\n    static int count = 0;\n    int i = 0;\n    public void changeCount() {\n        while (i &lt; 5) {\n            i++;\n            count++;\n        }\n    }\n    public static void main(String[] args) {\n        Test check1 = new Test();\n        Test check2 = new Test();\n        check1.changeCount();\n        check2.changeCount();\n        System.out.print(check1.count + &quot;:&quot; + check2.count);\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "10:10",
      "5:5",
      "5:10",
      "Compilation fails"
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 57,
    "type": "multiple",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    double discount = 0;\n    int qty = Integer.parseInt(args[0]);\n    // line n1;\n}\nAnd given the requirements: \nIf the value of the qty variable is greater than or equal to 90, discount = 0.5 \nIf the value of the qty variable is between 80 and 90, discount = 0.2 </code></pre>\nWhich two code fragments can be independently placed at line n1 to meet the requirements?",
    "options": [
      "if (qty >= 90) { discount = 0.5; } if (qty > 80 && qty < 90) { discount = 0.2; }",
      "discount = (qty >= 90) ? 0.5 : 0; discount = (qty > 80) ? 0.2 : 0;",
      "discount = (qty >= 90) ? 0.5 : (qty > 80) ? 0.2 : 0;",
      "if (qty > 80 && qty < 90) { discount = 0.2; } else { discount = 0; } if (qty >= 90) { discount = 0.5; } else { discount = 0; }",
      "discount = (qty > 80) ? 0.2 : (qty >= 90) ? 0.5 : 0;"
    ],
    "answer": [
      1,
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 58,
    "type": "multiple",
    "question": "Which three statements describe the object-oriented features of the Java language?",
    "options": [
      "Objects cannot be reused.",
      "A subclass can inherit from a superclass.",
      "Objects can share behaviors with other objects.",
      "A package must contain more than one class.",
      "Object is the root class of all other objects.",
      "A main method must be declared in every class."
    ],
    "answer": [
      2,
      3,
      5
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 59,
    "type": "single",
    "question": "Given the following code:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">apublic static void main(String[] args) {\n    String[] planets = {&quot;Mercury&quot;, &quot;Venus&quot;, &quot;Earth&quot;, &quot;Mars&quot;};\n    System.out.println(planets.length);\n    System.out.println(planets[1].length());\n}</code></pre>\nWhat is the output?",
    "options": [
      "4, 4",
      "3, 5",
      "4, 7",
      "5, 4",
      "4, 5",
      "4, 21"
    ],
    "answer": [
      5
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 60,
    "type": "multiple",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class CCMask {\n    public static String maskCC(String creditCard) {\n        String x = &quot;XXXX-XXXX-XXXX-&quot;;\n        // line n1\n    }\n    public static void main(String[] args) {\n        System.out.println(maskCC(&quot;1234-5678-9101-1121&quot;));\n    }\n}\n\nYou must ensure that the maskCC method returns a string that hides all digits except the four last digits (and hyphens). </code></pre>\nWhich two code fragments should you use at line n1?",
    "options": [
      "StringBuilder sb = new StringBuilder (creditCard); sb.substring (15, 19); return x + sb;",
      "return x + creditCard.substring(15, 19);",
      "StringBuilder sb = new StringBuilder(x); sb.append (creditCard, 15, 19); return sb.toString();",
      "StringBuilder sb = new StringBuilder (creditCard); StringBuilder s = sb.insert (0, x); return s.toString();"
    ],
    "answer": [
      2,
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 61,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">package p1;\npublic class Acc {\n    int p;\n    private int q;\n    protected int r;\n    public int s;\n}\n\nTest.java:\n\npackage p2;\nimport p1.Acc;\npublic class Test extends Acc {\n    public static void main(String[] args) {\n        Acc obj = new Test();\n    }\n}</code></pre>\nWhich statement is true?",
    "options": [
      "Both p and s are accessible by obj.",
      "Only s is accessible by obj.",
      "Both r and s are accessible by obj.",
      "p, r, and s are accessible by obj."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 62,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class Base {\n    public void test() { System.out.println(&quot;Base&quot;); }\n}\n\nDerivedA.java:\n\nclass DerivedA extends Base {\n    public void test() { System.out.println(&quot;DerivedA &quot;); }\n}\nDerivedB.java:\n\nclass DerivedB extends DerivedA {\n    public void test() { System.out.println(&quot;DerivedB &quot;); }\n    public static void main(String[] args) {\n        Base b1 = new DerivedB();\n        Base b2 = new DerivedA();\n        Base b3 = new DerivedB();\n        b1 = (Base) b3;\n        Base b4 = (DerivedA) b3;\n        b1.test();\n        b4.test();\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "Base, DerivedA",
      "Base, DerivedB",
      "DerivedB, DerivedB",
      "DerivedB, DerivedA",
      "A ClassCastException is thrown at runtime."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 63,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">System.out.println(&quot;5 + 2 = &quot; + 3 + 4);\nSystem.out.println(&quot;5 + 2 = &quot; + (3 + 4));</code></pre>\nWhat is the result?",
    "options": [
      "5 + 2 = 34, 5 + 2 = 34",
      "5 + 2 = 3 + 4, 5 + 2 = 7",
      "7 = 7, 7 + 7",
      "5 + 2 = 34, 5 + 2 = 7"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 64,
    "type": "single",
    "question": "Given the code fragments:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">Person.java\npublic class Person {\n    String name;\n    int age;\n    public Person(String n, int a) { name = n; age = a; }\n    public String getName() { return name; }\n    public int getAge() { return age; }\n}\n\nTest.java:\n\npublic static void checkAge(List&lt;Person&gt; list, Predicate&lt;Person&gt; predicate) {\n    for (Person p : list) {\n        if (predicate.test(p)) {\n            System.out.println(p.name + &quot; &quot;);\n        }\n    }\n}\n\npublic static void main(String[] args) {\n    List&lt;Person&gt; iList = Arrays.asList(new Person(&quot;Hank&quot;, 45), new Person(&quot;Charlie&quot;, 40), new Person(&quot;Smith&quot;, 38));\n    // line n1\n}</code></pre>\nWhich code fragment, when inserted at line n1, enables the code to print Hank?",
    "options": [
      "checkAge(iList, () -> p.getAge() > 40);",
      "checkAge(iList, Person p -> p.getAge() > 40);",
      "checkAge(iList, p -> p.getAge() > 40);",
      "checkAge(iList, (Person p) -> { p.getAge() > 40; });"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 65,
    "type": "single",
    "question": "Given the code fragment: <pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    String[][] arr = {{\"A\", \"B\", \"C\"}, {\"D\", \"E\"}};\n    for (int i = 0; i < arr.length; i++) {\n        for (int j = 0; j < arr[i].length; j++) {\n            System.out.print(arr[i][j] + \" \");\n            if (arr[i][j].equals(\"B\")) {\n                break;\n            }\n        }\n        continue;\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "ABC",
      "ABCDE",
      "AB DE ",
      "Compilation fails."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 66,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    String str = &quot; &quot;;\n    str.trim();\n    System.out.println(str.equals(&quot;&quot;) + &quot; &quot; + str.isEmpty());\n}</code></pre>\nWhat is the result?",
    "options": [
      "true true",
      "true false",
      "false false",
      "false true"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 67,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class App {\n    public static void main(String[] args) {\n        String str1 = &quot;Java&quot;;\n        String str2 = new String(&quot;java&quot;);\n        // line n1\n        { System.out.println(&quot;Equal&quot;); }\n        else { System.out.println(&quot;Not Equal&quot;); \n\t}\n    }\n}</code></pre>\nWhich code fragment enables the App class to print Equal?",
    "options": [
      "String str3 = str2; if (str1 == str3)",
      "if (str1.equalsIgnoreCase(str2))",
      "String str3 = str2; if (str1.equals(str3))",
      "if (str1.toLowerCase() == str2.toLowerCase())"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 68,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">apublic class SumTest {\n    public static void doSum(Integer x, Integer y) { \n\tSystem.out.println(&quot;Integer sum is &quot; + (x + y)); \n}\n    public static void doSum(double x, double y) { \n\tSystem.out.println(&quot;double sum is &quot; + (x + y)); \n}\n    public static void doSum(float x, float y) { \n\tSystem.out.println(&quot;float sum is &quot; + (x + y)); \n}\n    public static void doSum(int x, int y) { \n\tSystem.out.println(&quot;int sum is &quot; + (x + y)); }\n\n    public static void main(String[] args) {\n        doSum(10, 20);\n        doSum(10.0, 20.0);\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "int sum is 30, float sum is 30.0",
      "int sum is 30, double sum is 30.0",
      "Integer sum is 30, double sum is 30.0",
      "Integer sum is 30, float sum is 30.0"
    ],
    "answer": [
      2
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 69,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">String[] strs = new String[2];\nint idx = 0;\nfor (String s : strs) {\n    strs[idx].concat(&quot; element &quot; + idx);\n    idx++;\n}\nfor (idx = 0; idx &lt; strs.length; idx++) {\n    System.out.println(strs[idx]);\n}</code></pre>\nWhat is the result?",
    "options": [
      "Element 0, Element 1",
      "Null element 0, Null element 1",
      "Null, Null",
      "A NullPointerException is thrown at runtime."
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 70,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class Vehicle {\n    int x;\n    Vehicle() { this(10); } // line n1\n    Vehicle(int x) { this.x = x; }\n}\nclass Car extends Vehicle {\n    int y;\n    Car() { super(); this(20); } // line n2\n    Car(int y) { this.y = y; }\n    public String toString() { return super.x + &quot;:&quot; + this.y; }\n}\n\nAnd given the code fragment:\n\nVehicle y = new Car();\nSystem.out.println(y);</code></pre>\nWhat is the result?",
    "options": [
      "A. 10:2",
      "B. 0:20",
      "C. Compilation fails at line n1",
      "D. Compilation fails at line n2"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 71,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">MyString.java\n\npackage p1;\n\nclass MyString {\n    String msg;\n    MyString(String msg) {\n        this.msg = msg;\n    }\n}\n\nTest.java\n\npackage p1;\n\npublic class Test {\n    public static void main(String[] args) {\n        System.out.println(&quot;Hello &quot; + new StringBuilder(&quot;Java SE 8&quot;));\n        System.out.println(&quot;Hello &quot; + new MyString(&quot;Java SE 8&quot;));\n    }\n}</code></pre>\n",
    "options": [
      "Hello Java SE 8\nHello Java SE 8",
      "Hello java.lang.StringBuilder@<<hashcode1>>\nHello p1.MyString@<<hashcode2>>",
      "Hello Java SE 8\nHello p1.MyString@<<hashcode>>",
      "Compilation fails at the Test class."
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 72,
    "type": "multiple",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">3.  public static void main(String[] args) {\n4.      int iVar = 100;\n5.      float fVar = 100.100f;\n6.      double dVar = 123;\n7.      iVar = fVar;\n8.      fVar = iVar;\n9.      dVar = fVar;\n10.     fVar = dVar;\n11.     dVar = iVar;\n12.     iVar = dVar;\n13. }</code></pre>\nWhich three lines fail to compile?",
    "options": [
      "Line 7",
      "Line 8",
      "Line 9",
      "Line 10",
      "Line 11",
      "Line 12"
    ],
    "answer": [
      1,
      4,
      6
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 73,
    "type": "single",
    "question": "Given:Javapublic class MainTest {\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">    public static void main(int[] args) {\n\tSystem.out.println(&quot;int main &quot; + args[0]);\n }\n    public static void main(Object[] args) { \n\tystem.out.println(&quot;Object main &quot; + args[0]);\n }\n    public static void main(String[] args) {\n\tSystem.out.println(&quot;String main &quot; + args[0]);\n }\n}\n\nand commands:\n\njavac MainTest.java\njava MainTest 1 2 3</code></pre>\nWhat is the result?",
    "options": [
      "int main 1",
      "Object main 1",
      "String main 1",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 74,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int num[][] = new int[1][3];\nfor (int i = 0; i &lt; num.length; i++) {\n    for (int j = 0; j &lt; num[i].length; j++) {\n        num[i][j] = 10;\n    }\n}</code></pre>\nWhich option represents the state of the num array?",
    "options": [
      "num[0][0]=10, num[0][1]=10, num[0][2]=10",
      "num[0][0]=10, num[1][0]=10, num[2][0]=10",
      "num[0][0]=10, num[0][1]=0, num[0][2]=0",
      "num[0][0]=10, num[0][1]=10, num[0][2]=10, num[0][3]=10 ... (等多個索引)"
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 75,
    "type": "single",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">   public class Person{\n\tString name;\n\tint age = 25;\n\n   public Person(String name){\n  \tthis();\n\tsetName(name);\n  }\n  \n  public Person(String name,int age){\n  \tPerson(name);\n\tsetAge(age);\n  }\n\n  //setter and getter methods go here\n\n  public String show(){\n\treturn name+&quot; &quot;+age+&quot; &quot;+number;\n  }\n  public static void main(String[] args){\n\tPerson p1 = new Person(&quot;Jesse&quot;);\n\tPerson p2 = new Person(&quot;Walter&quot;,52);\n\tSystem.out.println(p1.show());\n\tSystem.out.println(p2.show());\n  }\n}</code></pre>\nWhat is the result?",
    "options": [
      "Jesse 25\n   Walter 52",
      "Compilation fails only at line n1",
      "Compilation fails only at line n2",
      "Compilation fails only at line n1 and line n2"
    ],
    "answer": [
      4
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 76,
    "type": "single",
    "question": "Given the following code for a Planet object:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Planet {\n    public String name;\n    public int moons;\n\n    public Planet(String name, int moons) {\n        this.name = name;\n        this.moons = moons;\n    }\n}\n\nAnd the following main method:\n\npublic static void main(String[] args) {\n    Planet[] planets = {\n        new Planet(&quot;Mercury&quot;, 0),\n        new Planet(&quot;Venus&quot;, 0),\n        new Planet(&quot;Earth&quot;, 1),\n        new Planet(&quot;Mars&quot;, 2)\n    };\n\n    System.out.println(planets);\n    System.out.println(planets[2]);\n    System.out.println(planets[2].moons);\n}</code></pre>\nWhat is the output?",
    "options": [
      "planets\nEarth\n1",
      "[LPlanets.Planet;@15db9742\nEarth\n1",
      "[LPlanets.Planet;@15db9742\nPlanets.Planet@6d06d69c\n1",
      "[LPlanets.Planet;@15db9742\nPlanets.Planet@6d06d69c\n[LPlanets.Moon;@7852e922",
      "[LPlanets.Planet;@15db9742\nVenus\n0"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 77,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">You are asked to develop a program for a shopping application, and you are given the following information:\n\nThe application must contain the classes Toy, EduToy, and ConsToy. The Toy class is the superclass of the other two classes.\n\nThe int calculatePrice (Toy t) method calculates the price of a toy.\n\nThe void printToy (Toy t) method prints the details of a toy.</code></pre>\nWhich definition of the Toy class adds a valid layer of abstraction to the class hierarchy?",
    "options": [
      "public abstract class Toy {\n    public abstract int calculatePrice(Toy t);\n    public void printToy(Toy t) { /* code goes here */ }\n}",
      "public abstract class Toy {\n    public int calculatePrice(Toy t) ;\n    public void printToy(Toy t) ;\n}",
      "public abstract class Toy {\n    public int calculatePrice(Toy t);\n    public final void printToy(Toy t) { /* code goes here */ }\n}",
      "public abstract class Toy {\n    public abstract int calculatePrice(Toy t) { /* code goes here */ }\n    public abstract void printToy(Toy t) { /* code goes here */ }\n}"
    ],
    "answer": [
      1
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 78,
    "type": "single",
    "question": "Given the following code:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int[] intArr = {15,30,45,60,75};\nintArr[2] = intArr[4];\nintArr[4] = 90;</code></pre>\nWhat are the values of each element in inArr after this code has executes?",
    "options": [
      "15,60,45,90,75",
      "15,90,45,90,75",
      "15,30,75,60,90",
      "15,30,90,60,90",
      "15,4,45,60,90"
    ],
    "answer": [
      3
    ],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 79,
    "type": "multiple",
    "question": "Given the following array:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int[] intArr = {8, 16, 32, 64, 128};</code></pre>\nWhich two code fragments, independently, print each element in this array?",
    "options": [
      "for (int i : intArr) {\n    System.out.print(intArr[i] + \" \");\n}",
      "for (int i : intArr) {\n    System.out.print(i + \" \");\n}",
      "for (int i=0 : intArr) {\n    System.out.print(intArr[i] + \" \");\n    i++;\n}",
      "for (int i=0; i < intArr.length; i++) {\n    System.out.print(i + \" \");\n}",
      "for (int i=0; i < intArr.length; i++) {\n    System.out.print(intArr[i] + \" \");\n}",
      "for (int i; i < intArr.length; i++) {\n    System.out.print(intArr[i] + \" \");\n}"
    ],
    "answer": [2, 5],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 80,
    "type": "single",
    "question": "Given the content of three files:\nA.java:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class A {\n    public void a() {}\n    int a;\n}</code></pre>\nB.java:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class B {\n    private int doStuff() {\n        private int x = 100;\n        return x++;\n    }\n}</code></pre>\nC.java:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">import java.io.*;\npackage p1;\nclass A {\n    public (static) void main(String fileName) throws IOException {}\n}</code></pre>\nWhich statement is true?",
    "options": [
      "Only the A.java file compiles successfully.",
      "Only the B.java file compiles successfully.",
      "Only the C.java file compiles successfully.",
      "The A.java and B.java files compile successfully.",
      "The B.java and C.java files compile successfully.",
      "The A.java and C.java files compile successfully."
    ],
    "answer": [1],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 81,
    "type": "multiple",
    "question": "Given the code fragment:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int[] array = {1, 2, 3, 4, 5};</code></pre>\nAnd given the requirements:\n1.Process all the elements of the array in the order of entry.\n2.Process all the elements of the array in the reverse order of entry.\n3.Process alternating elements of the array in the order of entry.\nWhich two statements are true?",
    "options": [
      "Requirements 1, 2, and 3 can be implemented by using the enhanced for loop.",
      "Requirements 1, 2, and 3 can be implemented by using the standard for loop.",
      "Requirements 2 and 3 CANNOT be implemented by using the standard for loop.",
      "Requirement 1 can be implemented by using the enhanced for loop.",
      "Requirement 3 CANNOT be implemented by using either the enhanced for loop or the standard for loop."
    ],
    "answer": [2, 4],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 82,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class TestScope {\n    public static void main(String[] args) {\n        int var1 = 200;\n        System.out.print(doCalc(var1));\n        System.out.print(\" \" + var1);\n    }\n    \n    static int doCalc(int var1) {\n        var1 = var1 * 2;\n        return var1;\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "400 200",
      "200 200",
      "400 400",
      "Compilation fails."
    ],
    "answer": [1],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 83,
    "type": "single",
    "question": "Given the following class declarations:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public abstract class Animal\npublic interface Hunter\npublic class Cat extends Animal implements Hunter\npublic class Tiger extends Cat</code></pre>\nWhich answer fails to compile?",
    "options": [
      "ArrayList&lt;Animal&gt; myList = new ArrayList&lt;&gt;();\nmyList.add(new Tiger());",
      "ArrayList&lt;Hunter&gt; myList = new ArrayList&lt;&gt;();\nmyList.add(new Cat());",
      "ArrayList&lt;Hunter&gt; myList = new ArrayList&lt;&gt;();\nmyList.add(new Tiger());",
      "ArrayList&lt;Tiger&gt; myList = new ArrayList&lt;&gt;();\nmyList.add(new Cat());",
      "ArrayList&lt;Animal&gt; myList = new ArrayList&lt;&gt;();\nmyList.add(new Cat());"
    ],
    "answer": [4],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 84,
    "type": "single",
    "question": "Which statement is true about Java byte code?",
    "options": [
      "It can run on any platform.",
      "It can run on any platform only if it was compiled for that platform.",
      "It can run on any platform that has the Java Runtime Environment.",
      "It can run on any platform that has a Java compiler.",
      "It can run on any platform only if that platform has both the Java Runtime Environment and a Java compiler."
    ],
    "answer": [3],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 85,
    "type": "single",
    "question": "Given:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class MarkList {\n    int num;\n    public static void graceMarks(MarkList obj4) {\n        obj4.num += 10;\n    }\n    public static void main(String[] args) {\n        MarkList obj1 = new MarkList();\n        MarkList obj2 = obj1;\n        MarkList obj3 = null;\n        obj2.num = 60;\n        graceMarks(obj2);\n    }\n}</code></pre>\nHow many MarkList instances are created in memory at runtime?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": [1],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 86,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Triangle {\n    static double area;\n    int b = 2, h = 3;\n    public static void main(String[] args) {\n        double p, b, h;\n        //line n1\n        if (area == 0) {\n            b = 3;\n            h = 4;\n            p = 0.5;\n        }\n        area = p * b * h;\n        //line n2\n        System.out.println(\"Area is \" + area);\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "Area is 6.0",
      "Area is 3.0",
      "Compilation fails at line n1",
      "Compilation fails at line n2"
    ],
    "answer": [4],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 87,
    "type": "multiple",
    "question": "Which three code fragments can be independently inserted at line n1 to enable the code to print one?\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Test {\n    public static void main(String[] args) {\n        //line n1\n        switch (x) {\n            case 1:\n                System.out.println(\"One\");\n                break;\n            case 2:\n                System.out.println(\"Two\");\n                break;\n        }\n    }\n}</code></pre>",
    "options": [
      "Byte x = 1;",
      "short x = 1;",
      "String x = \"1\";",
      "Long x = 1;",
      "Double x = 1;",
      "Integer x = new Integer(\"1\");"
    ],
    "answer": [1, 2, 6],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 88,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class App {\n    public static void main(String[] args) {\n        Boolean[] bool = new Boolean[2];\n        bool[0] = new Boolean(Boolean.parseBoolean(\"true\"));\n        bool[1] = new Boolean(null);\n        System.out.println(bool[0] + \" \" + bool[1]);\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "true false",
      "true null",
      "Compilation fails",
      "A NullPointerException is thrown at runtime"
    ],
    "answer": [1],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 89,
    "type": "single",
    "question": "Given the following code for the classes MyException and Test:\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class MyException extends RuntimeException {}\npublic class Test {\n    public static void main(String[] args) {\n        try {\n            method1();\n        } catch (MyException ne) {\n            System.out.print(\"A\");\n        }\n    }\n    public static void method1() {\n        try {\n            throw Math.random() > 0.5 ? new MyException() : new RuntimeException();\n        } catch (RuntimeException re) {\n            System.out.print(\"B\");\n        }\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "A",
      "B",
      "Either A or B",
      "A B",
      "A compile time error occurs at line n1"
    ],
    "answer": [2],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 90,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class App {\n    String myStr = \"7007\";\n    public void doStuff(String str) {\n        int myNum = 0;\n        try {\n            String myStr = str;\n            myNum = Integer.parseInt(myStr);\n        } catch (NumberFormatException ne) {\n            System.err.println(\"Error\");\n        }\n        System.out.println(\"myStr: \" + myStr + \", myNum: \" + myNum);\n    }\n    public static void main(String[] args) {\n        App obj = new App();\n        obj.doStuff(\"9009\");\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "myStr: 9009, myNum: 9009",
      "myStr: 7007, myNum: 7007",
      "myStr: 7007, myNum: 9009",
      "Compilation fails"
    ],
    "answer": [3],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 91,
    "type": "multiple",
    "question": "Which two are benefits of polymorphism?",
    "options": [
      "Faster code at runtime",
      "More efficient code at runtime",
      "More dynamic code at runtime",
      "More flexible and reusable code",
      "Code that is protected from extension by other classes"
    ],
    "answer": [2, 4],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 92,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int nums1[] = new int[3];\nint nums2[] = {1, 2, 3, 4, 5};\nnums1 = nums2;\nfor (int x : nums1) {\n    System.out.print(x + \":\");\n}</code></pre>\nWhat is the result?",
    "options": [
      "1:2:3:4:5:",
      "1:2:3:",
      "Compilation fails.",
      "An ArrayOutOfBoundsException is thrown at runtime."
    ],
    "answer": [1],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 93,
    "type": "single",
    "question": "Given the Product class and a code fragment, what is the result?\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Product {\n    int id;\n    String name;\n    public Product(int id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n}\n// Fragment:\nProduct p1 = new Product(101, \"Pen\");\nProduct p2 = new Product(101, \"Pen\");\nProduct p3 = p1;\nboolean ans1 = p1 == p2;\nboolean ans2 = p1.name.equals(p2.name);\nSystem.out.print(ans1 + \":\" + ans2);</code></pre>",
    "options": [
      "true:true",
      "true:false",
      "false:true",
      "false:false"
    ],
    "answer": [3],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 94,
    "type": "multiple",
    "question": "Given the following classes, which two options fail to compile when placed at line n1 of the main method?\n<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class Employee { public int salary; }\npublic class Manager extends Employee { public int budget; }\npublic class Director extends Manager { public int stockOptions; }</code></pre>",
    "options": [
      "employee.salary = 50_000;",
      "director.salary = 80_000;",
      "employee.budget = 200_000;",
      "manager.budget = 1_000_000;",
      "manager.stockOption = 500;",
      "director.stockOptions = 1_000;"
    ],
    "answer": [3, 5],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 95,
    "type": "single",
    "question": "Which one of the following code examples uses valid Java syntax?",
    "options": [
      "public class Boat { public static void main (String [] args) { System.out.println (\"I float.\"); } }",
      "public class Cake { public static void main (String [] ) { System.out.println (\"Chocolate\"); } }",
      "public class Dog { public void main (String [] args) { System.out.println (\"Squirrel.\"); } }",
      "public class Bank { public static void main (String () args) { System.out.println (\"Earn interest.\"); } }"
    ],
    "answer": [1],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 96,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">int n [][] = {{1, 3}, {2, 3}};\nfor (int i = n.length-1; i >= 0; i--) {\n    for (int y : n[i]) {\n        System.out.print (y);\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "1324",
      "2313",
      "3142",
      "4231"
    ],
    "answer": [2],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 97,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">class Caller {\n    private void init() { System.out.println(\"Initialized\"); }\n    private void start() { init(); System.out.println(\"Started\"); }\n}\npublic class TestCall {\n    public static void main(String[] args) {\n        Caller c = new Caller();\n        c.start();\n        c.init();\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "An exception is thrown at runtime.",
      "Initialized Started Initialized",
      "Initialized Started",
      "Compilation fails."
    ],
    "answer": [4],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 98,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public static void main(String[] args) {\n    try {\n        int num = 10;\n        int div = 0;\n        int ans = nim / div;\n    } catch (ArithmeticException ae) {\n        ans = 0; // line n1\n    } catch (Exception e) {\n        System.out.println(\"Invalid calculation\");\n    }\n    System.out.println(\"Answer = \" + ans); // line n2\n}</code></pre>\nWhat is the result?",
    "options": [
      "Answer = 0",
      "Invalid calculation",
      "Compilation fails only at line n1.",
      "Compilation fails only at line n2.",
      "Compilation fails only at line n1 and line n2."
    ],
    "answer": [5],
    "weight": 1,
    "image": null,
    "explanation": ""
  },
  {
    "id": 99,
    "type": "single",
    "question": "<pre class=\"line-numbers line-hight19\"><code class=\"language-csharp\">public class MyField {\n    int x;\n    int y;\n    public void doStuff(int x, int y) {\n        this.x = x;\n        y = this.y;\n    }\n    public void display() {\n        System.out.print(x + \" \" + y + \" : \");\n    }\n    public static void main(String[] args) {\n        MyField m1 = new MyField();\n        m1.x = 100;\n        m1.y = 200;\n        MyField m2 = new MyField();\n        m2.doStuff(m1.x, m1.y);\n        m1.display();\n        m2.display();\n    }\n}</code></pre>\nWhat is the result?",
    "options": [
      "100 0 : 100 200 :",
      "100 0 : 100 0 :",
      "100 200 : 100 200 :",
      "100 200 : 100 0 :"
    ],
    "answer": [4],
    "weight": 1,
    "image": null,
    "explanation": ""
  }
];
