import React, { useContext } from "react";
import { NavContext } from "../context/NavProvider";
import "./Menubar.css";
export default function Menubar() {
  const [nav, setNav] = useContext(NavContext);
  return (
    <div className="Menu-1">
      <div className="Menu-2" onClick={() => setNav("keep")}>
        <div className="Menu-3">
          <span class="material-symbols-outlined menu-icons">lightbulb</span>
        </div>
        <div className="Menu-4">
          <p>Notes</p>
        </div>
      </div>
      <div className="Menu-2" onClick={() => setNav("Remainders")}>
        <div className="Menu-3">
          <span class="material-symbols-outlined menu-icons">
            notifications
          </span>
        </div>
        <div className="Menu-4">
          <p>Reminders</p>
        </div>
      </div>
      <div className="Menu-2" onClick={() => setNav("Edit labels")}>
        <div className="Menu-3">
          <span class="material-symbols-outlined menu-icons">edit</span>
        </div>
        <div className="Menu-4">
          <p>Edit labels</p>
        </div>
      </div>
      <div className="Menu-2" onClick={() => setNav("Archive")}>
        <div className="Menu-3">
          <span class="material-symbols-outlined menu-icons">archive</span>
        </div>
        <div className="Menu-4">
          <p>Archive</p>
        </div>
      </div>
      <div className="Menu-2" onClick={() => setNav("Trash")}>
        <div className="Menu-3">
          <span class="material-symbols-outlined menu-icons">delete</span>
        </div>
        <div className="Menu-4">
          <p>Trash</p>
        </div>
      </div>
    </div>
  );
}