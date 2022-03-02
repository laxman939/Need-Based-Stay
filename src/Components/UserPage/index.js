import React from "react";

function UserPage() {
  return (
    <div className="user-main">
      <h2 style={{ textAlign: "center" }}>User Profile Card</h2>

      <div class="card">
        <img src="/w3images/team2.jpg" alt="John" style={{ width: "100%" }} />
        <h1>John Doe</h1>
        <p class="title">CEO & Founder, Example</p>
        <p>Harvard University</p>
        {/* <div style={{margin: "24px 0"}}>
          <a href="#">
            <i class="fa fa-dribbble"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
        </div> */}
        <p>
          <button>Contact</button>
        </p>
      </div>
      {/* <form class="flex items-center space-x-6">
        <div class="shrink-0">
          <img
            class="h-16 w-16 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
            alt="Current profile photo"
          />
        </div>
        <label class="block">
          <span class="sr-only">Choose profile photo</span>
          <input
            type="file"
            class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
          />
        </label>
      </form> */}
    </div>
  );
}

export default UserPage;
