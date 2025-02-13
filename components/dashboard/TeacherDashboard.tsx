"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TeacherProfile, TeacherLesson } from "@/app/types/dashboard";
import { Plus, Edit2, File } from "lucide-react";
import { LessonViewer } from "./LessonViewer";

interface TeacherDashboardProps {
  profile: TeacherProfile;
  lessons: TeacherLesson[];
}

export function TeacherDashboard({ profile, lessons }: TeacherDashboardProps) {
  const [activeTab, setActiveTab] = useState<"lessons" | "students">("lessons");
  const [showGameGenerator, setShowGameGenerator] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<TeacherLesson | null>(
    null
  );
  const [viewingLesson, setViewingLesson] = useState<TeacherLesson | null>(
    null
  );

  const handleGenerateGame = (lesson: TeacherLesson) => {
    setSelectedLesson(lesson);
    setShowGameGenerator(true);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={profile.avatar} alt={profile.name} />
        </Avatar>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold">{profile.name}</h2>
          <code className="text-sm text-muted-foreground">{profile.code}</code>
          <span className="text-sm text-purple-600">
            {profile.subject} Teacher
          </span>
        </div>
      </CardHeader>

      <CardContent>
        {/* Stats Overview */}
        <div className="flex justify-between mb-6">
          <StatsItem icon="👥" value={profile.students} label="Students" />
          <StatsItem icon="📚" value={lessons.length} label="Lessons" />
          <StatsItem
            icon="🎮"
            value={lessons.filter((l) => l.studentResponses).length}
            label="Active Games"
          />
        </div>

        {/* Tabs */}
        <div className="border-b mb-4">
          <div className="flex">
            <button
              className={`px-4 py-2 ${
                activeTab === "lessons" ? "border-b-2 border-purple-600" : ""
              }`}
              onClick={() => setActiveTab("lessons")}
            >
              Lessons
            </button>
            <button
              className={`px-4 py-2 ${
                activeTab === "students" ? "border-b-2 border-purple-600" : ""
              }`}
              onClick={() => setActiveTab("students")}
            >
              Students
            </button>
          </div>
        </div>

        {/* Lessons List */}
        {activeTab === "lessons" && (
          <div className="space-y-3">
            <button className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-purple-600 hover:text-purple-600 flex items-center justify-center gap-2">
              <Plus size={16} />
              Add New Lesson
            </button>

            {lessons.map((lesson) => (
              <div key={lesson.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-medium">
                      Lesson {lesson.id}: {lesson.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {lesson.description}
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{lesson.studentResponses || 0} student responses</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewingLesson(lesson)}
                      className="flex items-center gap-1 hover:text-purple-600"
                    >
                      <File size={14} />
                      View Lesson
                    </button>
                    <button className="flex items-center gap-1 hover:text-purple-600">
                      <Edit2 size={14} />
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Game Generator Dialog */}
        {showGameGenerator && selectedLesson && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
              <h3 className="text-lg font-semibold mb-4">
                Generate Game for {selectedLesson.title}
              </h3>
              <textarea
                className="w-full p-3 border rounded-lg mb-4 !text-black"
                placeholder="Describe the game requirements..."
                rows={4}
              />
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setShowGameGenerator(false)}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                >
                  Cancel
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                  Generate
                </button>
              </div>
            </div>
          </div>
        )}

        {viewingLesson && (
          <LessonViewer
            lesson={viewingLesson}
            onClose={() => setViewingLesson(null)}
          />
        )}
      </CardContent>
    </Card>
  );
}

function StatsItem({
  icon,
  value,
  label,
}: {
  icon: string;
  value: number;
  label: string;
}) {
  return (
    <div className="text-center">
      <div className="text-2xl mb-1">
        {icon} {value}
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  );
}
