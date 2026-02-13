#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// Structure to store student information
struct Student {
int roll;
char name[50];
float marks;
};
// Function to add 'n' student records into students.dat (binary file)
void addStudents(int n) {
struct Student s;
FILE *fp = fopen("students.dat", "wb"); // Open file in write-binary mode
if (!fp) {
printf("Error: Could not create students.dat\n");
return;
}
// Loop to take 'n' student inputs and write them to file
for (int i = 0; i < n; i++) {
printf("Enter roll no, name, and marks: ");
scanf("%d %s %f", &s.roll, s.name, &s.marks);
fwrite(&s, sizeof(s), 1, fp); // Write struct to file
}
fclose(fp); // Close file after writing
}
// Function to display student records from any given file
void displayStudents(const char *filename) {

struct Student s;
FILE *fp = fopen(filename, "rb"); // Open file in read-binary mode
if (!fp) {
printf("Error: Could not open %s\n", filename);
return;
}
// Read and print student data until end of file
while (fread(&s, sizeof(s), 1, fp)) {
printf("Roll: %d, Name: %s, Marks: %.1f\n", s.roll, s.name, s.marks);
}
fclose(fp);
}
// Function to sort student records by marks in descending order
void sortStudents(int n) {
struct Student *arr = malloc(n * sizeof(struct Student)); // Dynamic array
FILE *fp = fopen("students.dat", "rb");
if (!fp) {
printf("Error: Could not open students.dat\n");
return;
}
fread(arr, sizeof(struct Student), n, fp); // Read all students into array
fclose(fp);
// Simple bubble sort based on marks (highest first)
struct Student temp;
for (int i = 0; i < n - 1; i++) {
for (int j = i + 1; j < n; j++) {
if (arr[i].marks < arr[j].marks) {
temp = arr[i];
arr[i] = arr[j];
arr[j] = temp;
}
}
}
// Save sorted data to new file
fp = fopen("sorted_students.dat", "wb");
fwrite(arr, sizeof(struct Student), n, fp);
fclose(fp);
free(arr); // Release allocated memory

}
// Function to search for a student by name in students.dat
void searchStudent(const char *name) {
struct Student s;
FILE *fp = fopen("students.dat", "rb"); // Open file in read-binary mode
if (!fp) {
printf("Error: Could not open students.dat\n");
return;
}
int found = 0;
// Search linearly through the file
while (fread(&s, sizeof(s), 1, fp)) {
if (strcmp(s.name, name) == 0) { // Compare names
printf("Student Found:\n");
printf("Roll: %d, Name: %s, Marks: %.1f\n", s.roll, s.name, s.marks);
found = 1;
break; // Stop after finding first match
}
}
if (!found) {
printf("Student not found.\n");
}
fclose(fp);
}
int main() {
int n;
printf("Enter number of students: ");
scanf("%d", &n);
// Step 1: Add students to file
addStudents(n);
// Step 2: Display original unsorted file
printf("Contents of students.dat:\n");
displayStudents("students.dat");
// Step 3: Sort students by marks and save to new file
sortStudents(n);
// Step 4: Display sorted file

printf("Contents of sorted_students.dat:\n");
displayStudents("sorted_students.dat");
// Step 5: Search for a student by name
char searchName[50];
printf("Enter name to search: ");
scanf("%s", searchName);
searchStudent(searchName);
return 0;
}