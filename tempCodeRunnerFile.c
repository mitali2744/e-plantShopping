#include <stdio.h>
#include <stdlib.h>
#include <string.h>

struct Student {
    int roll;
    char name[50];
    float marks;
};

void addStudents(int n) {
    struct Student s;
    FILE *fp = fopen("students.dat", "wb");
    if (!fp) {
        printf("Error: Could not create students.dat\n");
        return;
    }
    for (int i = 0; i < n; i++) {
        printf("Enter roll no, name, and marks: ");
        scanf("%d %s %f", &s.roll, s.name, &s.marks);
        fwrite(&s, sizeof(s), 1, fp);
    }
    fclose(fp);
}

void displayStudents(const char *filename) {
    struct Student s;
    FILE *fp = fopen(filename, "rb");
    if (!fp) {
        printf("Error: Could not open %s\n", filename);
        return;
    }
    while (fread(&s, sizeof(s), 1, fp)) {
        printf("Roll: %d, Name: %s, Marks: %.1f\n", s.roll, s.name, s.marks);
    }
    fclose(fp);
}

void sortStudents(int n) {
    struct Student *arr = malloc(n * sizeof(struct Student));
    FILE *fp = fopen("students.dat", "rb");
    if (!fp) {
        printf("Error: Could not open students.dat\n");
        return;
    }
    fread(arr, sizeof(struct Student), n, fp);
    fclose(fp);

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

    fp = fopen("sorted_students.dat", "wb");
    fwrite(arr, sizeof(struct Student), n, fp);
    fclose(fp);

    free(arr);
}

void searchStudent(const char *name) {
    struct Student s;
    FILE *fp = fopen("students.dat", "rb");
    if (!fp) {
        printf("Error: Could not open students.dat\n");
        return;
    }
    int found = 0;
    while (fread(&s, sizeof(s), 1, fp)) {
        if (strcmp(s.name, name) == 0) {
            printf("Student Found:\n");
            printf("Roll: %d, Name: %s, Marks: %.1f\n", s.roll, s.name, s.marks);
            found = 1;
            break;
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
    addStudents(n);

    printf("Contents of students.dat:\n");
    displayStudents("students.dat");

    sortStudents(n);

    printf("Contents of sorted_students.dat:\n");
    displayStudents("sorted_students.dat");

    char searchName[50];
    printf("Enter name to search: ");
    scanf("%s", searchName);
    searchStudent(searchName);

    return 0;
}
