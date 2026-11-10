const prisma = require("../prisma");
// ดึงข้อมูลและค้นหาข้อมูล
exports.getAllSubjects = async (req,res) =>{
    try {
        const search = req.query.search || "";
        const subjects = await prisma.subject.findMany({
            where: { name: { contains: search } },
            orderBy: { id: "asc" },
        });
        res.json(subjects);
    }catch (error){
        res.status(500).json({ message: "Error" });
    }
}

exports.getSubjectById = async(req,res) =>{
    try {
        const id = Number(req.params.id);
        const subject = await prisma.subject.findUnique({
            where: {id}
        });
        if(!subject){
            return res.status(404).json({ message: "Subject not found" });
        }
        res.json(subject);
    } catch (error) {
        res.status(500).json({ message: "Internal server Error"})
    }
};

exports.createSubject = async (req,res) =>{
    try {
        const { name, subjectCode, objective, description, theoryHours, practiceHours, credit, teacher } = req.body;
        if (!name || !subjectCode|| !objective || !theoryHours || !practiceHours || !credit || !teacher) 
            {
            return res.status(400).json({ message: "Please fill in all required fields" });
        }

        const newSubject = await prisma.subject.create({
            data: { 
                name, 
                subjectCode, 
                objective, 
                description : description || null, 
                theoryHours: Number(theoryHours), 
                practiceHours: Number(practiceHours), 
                credit: Number(credit), 
                teacher 
            },
        })
        res.status(201).json(newSubject);

    } catch (error) {
        res.status(500).json({ message: "Failed to create subject" });
    }
}

exports.updateSubject = async (req,res) =>{
    try {
        const id = Number(req.params.id);
        const { name, subjectCode, objective, description, theoryHours, practiceHours, credit, teacher } = req.body;
        const subject = await prisma.subject.findUnique({ where: { id } });
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }

        const updatedSubject = await prisma.subject.update({
            where: { id },
            data: { 
                name, 
                subjectCode, 
                objective, 
                description : description || null, 
                theoryHours: Number(theoryHours), 
                practiceHours: Number(practiceHours), 
                credit: Number(credit), 
                teacher 
            },
        });
        res.status(201).json(updatedSubject);
    } catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
}

exports.deleteSubject = async (req,res) =>{
    try {
        const id = Number(req.params.id);
        const subject = await prisma.subject.findUnique({ where: { id } });
        if (!subject) {
            return res.status(404).json({ message: "Subject not found" });
        }
        await prisma.subject.delete({ where: { id } });
        res.json({ message: "Subject deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server Error" });
    }
}