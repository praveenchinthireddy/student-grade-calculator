let subjectCount = 5;

function addSubject()
{
    subjectCount++;

    let input =
    document.createElement("input");

    input.type = "number";

    input.className = "subject";

    input.placeholder =
    "Subject " + subjectCount + " Marks";

    document.getElementById("subjects")
    .appendChild(input);
}

function removeSubject()
{
    let subjects =
    document.querySelectorAll(".subject");

    if(subjects.length > 1)
    {
        subjects[subjects.length - 1].remove();

        subjectCount--;
    }
    else
    {
        alert("At least one subject is required!");
    }
}

function calculateGrade()
{
    let name =
    document.getElementById("name").value;

    let maxMarks =
    Number(
    document.getElementById("totalMarks").value
    );

    let subjects =
    document.querySelectorAll(".subject");

    let obtained = 0;

    subjects.forEach(subject =>
    {
        obtained += Number(subject.value);
    });

    let total =
    maxMarks * subjects.length;

    let percentage =
    (obtained / total) * 100;

    let grade;

    if(percentage >= 90)
    {
        grade = "A+";
    }
    else if(percentage >= 80)
    {
        grade = "A";
    }
    else if(percentage >= 70)
    {
        grade = "B";
    }
    else if(percentage >= 60)
    {
        grade = "C";
    }
    else if(percentage >= 50)
    {
        grade = "D";
    }
    else
    {
        grade = "FAIL";
    }

    document.getElementById("result")
    .innerHTML =
    `
    <h2>📋 Student Result</h2>

    <p>👨‍🎓 Name : ${name}</p>

    <p>📚 Subjects : ${subjects.length}</p>

    <p>📝 Obtained Marks : ${obtained}</p>

    <p>📖 Total Marks : ${total}</p>

    <p>📊 Percentage : ${percentage.toFixed(2)}%</p>

    <p>🏆 Grade : ${grade}</p>
    `;
}