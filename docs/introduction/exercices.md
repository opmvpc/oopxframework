# Exercices

## Exercism

1. opérateurs arithmétiques et boucles
   1. [https://exercism.org/tracks/php/exercises/ordinal-number/](https://exercism.org/tracks/php/exercises/ordinal-number/])
   1. [https://exercism.org/tracks/php/exercises/sum-of-multiples](https://exercism.org/tracks/php/exercises/sum-of-multiples)
1. Chaines de caractères
   1. [https://exercism.org/tracks/php/exercises/reverse-string](https://exercism.org/tracks/php/exercises/reverse-string)
   1. [https://exercism.org/tracks/php/exercises/binary](https://exercism.org/tracks/php/exercises/binary)
   1. [https://exercism.org/tracks/php/exercises/rna-transcription](https://exercism.org/tracks/php/exercises/rna-transcription)
   1. [https://exercism.org/tracks/php/exercises/atbash-cipher](https://exercism.org/tracks/php/exercises/atbash-cipher)
1. Tableaux
   1. [https://exercism.org/tracks/php/exercises/nucleotide-count](https://exercism.org/tracks/php/exercises/nucleotide-count)
   1. [https://exercism.org/tracks/php/exercises/word-count/edit](https://exercism.org/tracks/php/exercises/word-count/edit)
   1. [https://exercism.org/tracks/php/exercises/flatten-array](https://exercism.org/tracks/php/exercises/flatten-array)
   1. [https://exercism.org/tracks/php/exercises/difference-of-squares](https://exercism.org/tracks/php/exercises/difference-of-squares)
   1. [https://exercism.org/tracks/php/exercises/accumulate](https://exercism.org/tracks/php/exercises/accumulate)
1. Chaines et tableaux
   1. [https://exercism.org/tracks/php/exercises/hamming](https://exercism.org/tracks/php/exercises/hamming)

## Exercices de lecture

Donnez le résultat final des programmes suivants:

### Chaine de caractères

1.

```php
$text = "This is an example of text";
$search = "ex";
$replace = "EX";

$newText = str_replace($search, $replace, $text);
$newText = strtoupper($newText);
$newText = strrev($newText);

echo $newText . PHP_EOL;
```

2.

```php
$string1 = "   This string   ";
$string2 = "   has extra spaces ";
$string3 = " at the beginning and end  ";

$newString = trim($string1) . " " . strtoupper(trim($string2)) . " " . strtolower(trim($string3));

echo $newString . PHP_EOL;
```

3.

```php
$string1 = "  This  string  has  ";
$string2 = " lots of ";
$string3 = " whitespace and ";
$string4 = " unwanted characters ";
$string5 = " !@#%^&* ";

$string1 = trim($string1);
$string2 = ucwords(strtolower(trim($string1)));
$string3 = str_replace(" ", "-", trim($string3));
$string5 = preg_replace("/[^a-zA-Z0-9]/", "", $string5);
$string4 = strrev(trim($string4));

$newString = $string1 . " " . $string2 . " " . $string3 . " " . $string4 . " " . $string5;

echo $newString . PHP_EOL;
```

### Tableaux

1.

```php
$numbers = [3, 17, 4, 2, 16, 18];

$min_number = min($numbers);
$max_number = max($numbers);
$sum_numbers = array_sum($numbers);

echo "Minimum number is: " . $min_number . PHP_EOL;
echo "Maximum number is: " . $max_number . PHP_EOL;
echo "The sum of numbers is: " . $sum_numbers . PHP_EOL;
```

2.

```php
$fruits = ["banana", "apple", "orange", "lemon", "apple", "banana"];

$unique_fruits = array_unique($fruits);
sort($unique_fruits);

$fruits_string = implode(" and ", array_slice($unique_fruits, 1));

echo "Fruits: " . $fruits_string . PHP_EOL;
```

3.

```php
$products = [
    ["name" => "Apple", "category" => "Fruit", "price" => 0.5],
    ["name" => "Banana", "category" => "Fruit", "price" => 0.2],
    ["name" => "Carrot", "category" => "Vegetable", "price" => 0.3],
    ["name" => "Lemon", "category" => "Fruit", "price" => 0.4],
    ["name" => "Tomato", "category" => "Vegetable", "price" => 0.6]
];

$fruits = array_filter($products, fn ($item) => $item["category"] === "Fruit");
$fruits_name = array_column($fruits, 'name');

echo "The name of fruits is: " . implode(", ", $fruits_name) . PHP_EOL;
```

### If / elseif / else

1.

```php
$age = 25;

if ($age < 18) {
    echo "Vous êtes mineur.";
} elseif ($age >= 18 && $age < 30) {
    echo "Vous êtes un adulte jeune.";
} else {
    echo "Vous êtes un adulte.";
}
```

2.

```php
$x = 5;

if ($x > 10) {
    $x = 10;
}

if ($x < 0) {
    $x = 0;
}

if ($x % 2 == 0) {
    echo "La valeur de x est paire et égale à " . $x;
} else {
    echo "La valeur de x est impaire et égale à " . $x;
}
```

3.

```php
$score = 75;

if ($score > 100) {
    $score = 100;
}

if ($score < 0) {
    $score = 0;
}

if ($score >= 90) {
    echo "Vous avez obtenu un A!";
} elseif ($score >= 80) {
    echo "Vous avez obtenu un B!";
} elseif ($score >= 70) {
    echo "Vous avez obtenu un C!";
} elseif ($score >= 60) {
    echo "Vous avez obtenu un D!";
} else {
    echo "Vous avez obtenu un E (échec)";
}
```

4.

```php
$orderTotal = 250;
$couponCode = "DISCOUNT10";

if ($couponCode == "FREESHIPPING") {
    echo "La livraison est gratuite!";
} elseif ($couponCode == "DISCOUNT10") {
    $orderTotal = $orderTotal - ($orderTotal * 0.1);
    echo "10% de remise appliquée! Montant total de la commande : $" . $orderTotal;
} else {
    echo "Aucun coupon valide n'a été entré. Montant total de la commande : $" . $orderTotal;
}
```

5.

```php
$a = 5;
$b = 10;
$c = 15;

if (($a + $b > $c) && ($a + $c > $b) && ($b + $c > $a)) {
    if (($a ** 2 + $b ** 2 == $c ** 2) || ($a ** 2 + $c ** 2 == $b ** 2) || ($b ** 2 + $c ** 2 == $a ** 2)) {
        echo "Les nombres sont des côtés d'un triangle rectangle.";
    } else {
        echo "Les nombres sont des côtés d'un triangle quelconque.";
    }
} else {
    echo "Les nombres ne peuvent pas être des côtés d'un triangle.";
}
```

6.

```php
$temp = -10;
$unit = "C";
$convertedTemp = 0;

if ($unit == "F") {
    $convertedTemp = ($temp - 32) * (5/9);
    echo $temp . " degrés Fahrenheit est égal à " . round($convertedTemp, 2) . " degrés Celsius.";
} elseif ($unit == "K") {
    $convertedTemp = $temp - 273.15;
    echo $temp . " degrés Kelvin est égal à " . round($convertedTemp, 2) . " degrés Celsius.";
} else {
    echo $temp . " degrés Celsius est déjà en degrés Celsius.";
}
```

7.

```php
$text = "This is an example of text";

if (strpos($text, "example") !== false) {
    $text = str_replace("example", "EXAMPLE", $text);
}

if (strlen($text) > 20) {
    $text = substr($text, 0, 20) . "...";
}

echo $text . PHP_EOL;
```

### Switch

1.

```php
$item = "Orange";
$price = 0;

switch ($item) {
    case "Apple":
        $price = 0.5;
        break;
    case "Banana":
        $price = 0.25;
        break;
    case "Orange":
        $price = 0.75;
        break;
    case "Mango":
        $price = 1.5;
        break;
    default:
        echo "Invalid item.";
}

$quantity = 10;
$total = $price * $quantity;

echo "Item: " . $item . "<br>";
echo "Price: $" . $price . "<br>";
echo "Quantity: " . $quantity . "<br>";
echo "Total: $" . $total . "<br>";
```

2.

```php
$input = "b";
$output = "";

switch ($input) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        $output = "Input is a vowel.";
        break;
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
        $output = "Input is a number.";
        break;
    default:
        $output = "Input is a consonant.";
}
echo $output;
```

3.

```php
$char = '?';
$code = ord($char);

switch (true) {
    case ($code > 64 && $code < 91):
        echo "Input is an uppercase letter";
        break;
    case ($code > 96 && $code < 123):
        echo "Input is a lowercase letter";
        break;
    case ($code > 47 && $code < 58):
        echo "Input is a number";
        break;
    case ($code > 32 && $code < 48) || ($code > 57 && $code < 65) || ($code > 90 && $code < 97) || ($code > 122 && $code < 127):
        echo "Input is a special character";
        break;
    default:
        echo "Invalid input";
}
```

### Ternaires

1.

```php
$number = 25;
$result = ($number % 2 == 0) ? "even" : "odd";
echo $result;
```

2.

```php
$age = 18;
$can_vote = ($age >= 18) ? true : false;
$can_vote = ($age >= 18);
```

3.

```php
$student_score = 75;
$passing_score = 60;
$result = ($student_score >= $passing_score) ? "Pass" : "Fail";

echo "Student score: " . $student_score . "<br>";
echo "Passing score: " . $passing_score . "<br>";
echo "Result: " . $result;

if($student_score > 100 || $student_score < 0)
{
    echo "Invalid score";
    $result = "Invalid";
}
```

### Elvis Operator

1.

```php
$student_name = "John";
$student_age = 25;

echo "Name: " . $student_name ?: "Unknown" . "\n";
echo "Age: " . $student_age ?: "Unknown" . "\n";
```

2.

```php
$student = ["name" => "John", "age" => 25, "course" => "Computer Science"];

$name = $student["name"] ?: "Unknown";
$age = $student["age"] ?: "Unknown";
$course = $student["course"] ?: "Unknown";

echo "Name: " . $name . "\n";
echo "Age: " . $age . "\n";
echo "Course: " . $course . "\n";

if (!isset($student["city"])) {
    $student["city"] = "Unknown";
}

$city = $student["city"] ?: "N/A";
echo "City: " . $city . "\n";
```

### Null Coalescing Operator

1.

```php
$student_name = "John";
$student_age = 25;

echo "Name: " . $student_name ?? "Unknown" . "\n";
echo "Age: " . $student_age ?? "Unknown" . "\n";
```

2.

```php
$student = ["name" => "John", "age" => 25];

$name = $student["name"] ?? "Unknown";
$age = $student["age"] ?? "Unknown";

$course = $student["course"] ?? null;
$grade = $student["grade"] ?? null;

$course = $course ?? "Not Enrolled";
$grade =?? "N/A";

echo "Name: " . $name . "\n";
echo "Age: " . $age . "\n";
echo "Course: " . $course . "\n";
echo "Grade: " . $grade . "\n";
```

### Match

1.

```php
$vehicle = "motorcycle";

$result = match ($vehicle) {
    "car" => "This is a car",
    "truck" => "This is a truck",
    "motorcycle" => "This is a motorcycle",
    "bicycle" => "This is a bicycle",
    default => "This is not a car, truck, motorcycle or bicycle"
};

echo $result;
```

2.

```php
$student = [
    'name' => 'John Doe',
    'age' => 22,
    'gender' => 'male',
    'grade' => 'A',
    'absences' => 2,
];

$result = match (true) {
    $student['age'] < 18 => 'Student is under 18 years old',
    $student['gender'] == 'male' && $student['grade'] == 'A' => 'Male student with grade A',
    $student['gender'] == 'female' && $student['absences'] == 0 => 'Female student with no absences',
    $student['age'] >= 18 && $student['grade'] == 'F' && $student['absences'] > 5 => 'Adult student with grade F and more than 5 absences',
    default => 'Student does not fit in any specific category'
};

echo $result;
```

### While

1.

```php
$i = 1;
while ($i <= 5) {
    echo $i . PHP_EOL;
    $i++;
}
```

2.

```php
$numbers = [3, 9, 15, 5, 8, 14];
$i = 0;
while ($i < count($numbers)) {
    if ($numbers[$i] % 2 == 0) {
        echo $numbers[$i] . " is even" . PHP_EOL;
    } else {
        echo $numbers[$i] . " is odd" . PHP_EOL;
    }
    $i++;
}
```

3.

```php
$list = [1, 2, 3, 4, 5];
$i = 0;
$sum = 0; // (max/2)*(max+1)
$max = 0;
$min = PHP_INT_MAX;

while($i < count($list)) {
    if($list[$i] > $max) {
        $max = $list[$i];
    }

    if($list[$i] < $min) {
        $min = $list[$i];
    }

    $sum += $list[$i];
    $i++;
}

$average = $sum / count($list);
echo "The sum of numbers is: " . $sum . PHP_EOL;
echo "The minimum number is: " . $min . PHP_EOL;
echo "The maximum number is: " . $max . PHP_EOL;
echo "The average of numbers is: " . $average . PHP_EOL;
```

4.

```php
$input = [
    ['name' => 'John', 'age' => 25, 'gender' => 'male'],
    ['name' => 'Jane', 'age' => 20, 'gender' => 'female'],
    ['name' => 'Mike', 'age' => 27, 'gender' => 'male'],
    ['name' => 'Emily', 'age' => 31, 'gender' => 'female'],
    //...
];
$i = 0;
$totalAge = 0;
$totalMales = 0;
$totalFemales = 0;

while ($i < count($input)) {
    $totalAge += $input[$i]['age'];
    if($input[$i]['gender'] === 'male') {
        $totalMales++;
    } else {
        $totalFemales++;
    }
    $i++;
}
$averageAge = $totalAge / count($input);
echo "Total number of males: " . $totalMales . PHP_EOL;
echo "Total number of females: " . $totalFemales . PHP_EOL;
echo "Average age of all individuals: " . $averageAge . PHP_EOL;
```

### Do While

1.

```php
$password = "";
do {
    $password = readline("Entrez votre mot de passe (au moins 8 caractères, une majuscule, une minuscule et un chiffre): ");
} while (!preg_match("/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/", $password));

echo "Mot de passe valide!";
```

### For

1.

```php
for ($i = 1; $i < 10; $i++) {
    echo $i . PHP_EOL;
}
```

2.

```php
$text = "This is a example of text";

for ($i = 0; $i < strlen($text); $i++) {
    echo $text[$i] . '-';
}
```

3.

```php
$text = "This is a example of text";
$vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
$newText = '';

for ($i = 0; $i < strlen($text); $i++) {
    if (!in_array($text[$i], $vowels)) {
        $newText .= $text[$i];
    }
}
echo $newText;
```

4.

```php
$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for ($i = count($numbers) - 1; $i >= 0; $i--) {
    if ($numbers[$i] % 2 == 0) {
        echo $numbers[$i] . ' is even' . PHP_EOL;
    } else {
        echo $numbers[$i] . ' is odd' . PHP_EOL;
    }
}
```

5.

```php
$text = "ThiS IS An exAMPle Of TeXT";
$search = "text";
$newText = "";

if(preg_match('/[A-Z]/', $text)){
    $text = strtolower($text);
}

if (strpos($text, $search) !== false) {
    $text = str_replace($search, strtoupper($search), $text);
}

for ($i = 0; $i < strlen($text); $i++) {
    if ($i % 2 == 0) {
        $newText .= strtoupper($text[$i]);
    } else {
        $newText .= $text[$i];
    }
}

echo $newText . PHP_EOL;
```

6.

```php
$numbers = [5, 3, 2, 1];

for ($i = 0; $i < count($numbers); $i++) {
    for ($j = $i+1; $j < count($numbers); $j++) {
        echo $numbers[$i] . ' * ' . $numbers[$j] . ' = ' . $numbers[$i] * $numbers[$j] . PHP_EOL;
    }
}
```

### Foreach

1.

```php
$fruits = ['apple', 'banana', 'orange', 'strawberry'];
foreach ($fruits as $fruit) {
    echo $fruit . PHP_EOL;
}
```

2.

```php
$employees = [
    ['name' => 'John Doe', 'salary' => 70000, 'position' => 'Manager'],
    ['name' => 'Jane Smith', 'salary' => 60000, 'position' => 'Developer'],
    ['name' => 'Bob Ross', 'salary' => 55000, 'position' => 'Designer'],
    ['name' => 'Charlie Brown', 'salary' => 65000, 'position' => 'Developer'],
];
$totalSalary = 0;
foreach ($employees as $employee) {
    if($employee['position'] === "Developer"){
        echo $employee['name'] . " - " . $employee['salary'] . PHP_EOL;
        $totalSalary += $employee['salary'];
    }
}
echo "Total salaire des développeurs: " . $totalSalary;
```

3.

```php
$data = [
    ['first_name' => 'John', 'last_name' => 'Doe', 'age' => 25],
    ['first_name' => 'Jane', 'last_name' => 'Smith', 'age' => 30],
    ['first_name' => 'Bob', 'last_name' => 'Ross', 'age' => 35],
    ['first_name' => 'Charlie', 'last_name' => 'Brown', 'age' => 40],
    ['first_name' => 'Maggie', 'last_name' => 'Simpson', 'age' => 3],
];
$oldest_person = "";
$youngest_person = "";
$oldest_age = 0;
$youngest_age = PHP_INT_MAX;
foreach ($data as $item) {
    $fullname = $item['first_name'] . ' ' . $item['last_name'];
    if($item['age'] > $oldest_age) {
        $oldest_age = $item['age'];
        $oldest_person = $fullname;
    }
    if($item['age'] < $youngest_age) {
        $youngest_age = $item['age'];
        $youngest_person = $fullname;
    }
}
echo "The oldest person is $oldest_person with age $oldest_age \n";
echo "The youngest person is $youngest_person with age $youngest_age";
```

4.

```php
$data = [
    ['first_name' => 'John', 'last_name' => 'Doe', 'age' => 25, 'gender' => 'male'],
    ['first_name' => 'Jane', 'last_name' => 'Smith', 'age' => 30, 'gender' => 'female'],
    ['first_name' => 'Bob', 'last_name' => 'Ross', 'age' => 35, 'gender' => 'male'],
    ['first_name' => 'Charlie', 'last_name' => 'Brown', 'age' => 40, 'gender' => 'male'],
    ['first_name' => 'Maggie', 'last_name' => 'Simpson', 'age' => 20, 'gender' => 'female'],
];
$male_counter = 0;
$female_counter = 0;
$male_age_sum = 0;
$female_age_sum = 0;
foreach ($data as $item) {
    if($item['gender'] == 'male') {
        $male_counter++;
        $male_age_sum += $item['age'];
    }
    elseif ($item['gender'] == 'female') {
        $female_counter++;
        $female_age_sum += $item['age'];
    }
}
$male_age_avg = $male_age_sum / $male_counter;
$female_age_avg = $female_age_sum / $female_counter;
echo "The average age of males is $male_age_avg \n";
echo "The average age of females is $female_age_avg";
```

5.

```php
$employees = [
    ['first_name' => 'John', 'last_name' => 'Doe', 'projects' => ['project1', 'project2', 'project3']],
    ['first_name' => 'Jane', 'last_name' => 'Smith', 'projects' => ['project2', 'project4', 'project5']],
    ['first_name' => 'Bob', 'last_name' => 'Ross', 'projects' => ['project1', 'project3']],
    ['first_name' => 'Charlie', 'last_name' => 'Brown', 'projects' => ['project4', 'project6']],
    ['first_name' => 'Maggie', 'last_name' => 'Simpson', 'projects' => ['project2']],
];
$project1 = [];
$project2 = [];
$project3 = [];
$project4 = [];
$project5 = [];
$project6 = [];
foreach ($employees as $employee) {
    foreach ($employee['projects'] as $project) {
        if($project == 'project1') {
            $project1[] = $employee['first_name'] . ' ' . $employee['last_name'];
        } elseif($project == 'project2') {
            $project2[] = $employee['first_name'] . ' ' . $employee['last_name'];
        } elseif($project == 'project3') {
            $project3[] = $employee['first_name'] . ' ' . $employee['last_name'];
        } elseif($project == 'project4') {
            $project4[] = $employee['first_name'] . ' ' . $employee['last_name'];
        } elseif($project == 'project5') {
            $project5[] = $employee['first_name'] . ' ' . $employee['last_name'];
        } elseif($project == 'project6') {
            $project6[] = $employee['first_name'] . ' ' . $employee['last_name'];
        }
    }
}
echo "Employees working on project1: " . implode(", ",$project1) . "\n";
echo "Employees working on project2: " . implode(", ",$project2) . "\n";
echo "Employees working on project3: " . implode(", ",$project3) . "\n";
echo "Employees working on project4: " . implode(", ",$project4) . "\n";
echo "Employees working on project5: " . implode(", ",$project5) . "\n";
echo "Employees working on project6:
```

### À quoi sert ce programme ?

Dites pour chaque programme ce qu'il fait et à quoi il sert.

1.

```php
function process_data($a, $b) {
        $c = $a + $b;
        return $c;
    }

    $first_val = 5;
    $second_val = 10;

    $result = process_data($first_val, $second_val);
    echo $result;
```

2.

```php
function calculate_values($input_array) {
    $output_array = [];
    $counter = 0;
    foreach($input_array as $value) {
        $output_array[$counter] = $value * 2;
        $counter++;
    }
    return $output_array;
}

function organize_data($input_array) {
    sort($input_array);
    return $input_array;
}

$original_data = [5, 2, 8, 1, 9];
$processed_data = calculate_values($original_data);
$organized_data = organize_data($processed_data);

print_r($organized_data);
```

3.

```php
function a($b) {
    $c = count($b);
    for ($d = 0; $d < $c / 2; $d++) {
        $e = $b[$d];
        $b[$d] = $b[$c - $d - 1];
        $b[$c - $d - 1] = $e;
    }
    return $b;
}
$f = [1, 2, 3, 4, 5];
$g = a($f);
print_r($g);
```

4.

```php
function a($b) {
    $c = str_split($b);
    $d = array_count_values($c);
    arsort($d);
    return key($d);
}

$e = "hello world";
$f = a($e);
echo $f;
```

5.

```php
function a($b) {
    $c = 0;
    foreach ($b as $d) {
        $c += $d;
    }
    return $c;
}

$e = [1, 2, 3, 4, 5];
$f = a($e);
echo $f;
```

6.

```php
function a($b) {
    $c = [];
    $d = explode(" ", $b);
    foreach ($d as $e) {
        if (strlen($e) > 3) {
            $f = str_split($e);
            $f[3] = "*";
            $g = implode("", $f);
            $c[] = $g;
        } else {
            $c[] = $e;
        }
    }
    return implode(" ", $c);
}
$h = "Hello my name is John";
$i = a($h);
echo $i;
```

7.

```php
function a($b) {
    for ($i = 0; $i < count($b); $i++) {
        $temp = $b[$i];
        $j = $i-1;
        while($j >= 0 && $b[$j] > $temp) {
            $b[$j+1] = $b[$j];
            $j--;
        }
        $b[$j+1] = $temp;
    }
    return $b;
}

$c = [3, 1, 4, 1, 5, 9, 2, 6, 5];
$d = a($c);
print_r($d);
```

8.

```php
function a($b) {
    for ($i = 0; $i < count($b) - 1; $i++) {
        $min = $i;
        for ($j = $i + 1; $j < count($b); $j++) {
            if ($b[$j] < $b[$min]) {
                $min = $j;
            }
        }
        if ($i != $min) {
            $temp = $b[$i];
            $b[$i] = $b[$min];
            $b[$min] = $temp;
        }
    }
    return $b;
}

$c = [4, 9, 5, 3, 9, 2, 2, 1];
$d = a($c);
print_r($d);
```
