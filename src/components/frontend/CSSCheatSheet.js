import React, { useState, useEffect, useRef } from "react";
import './css_cheat_sheet.css';

const CSSCheatSheet = () => {
	return (
		<div>
			<img src="/margin-border-padding.png" alt="alt text" style={{margin:"20px", width:"auto"}} width="528" height="400" />
			<div class="container">
				<div class="box-1">
					<h1>Hello World</h1>
					<p>1 whole metric paragraph of words that even spans multiple lines. This reminds
						me of school when you would have to write an essay or whatever that was X amount of lines
						long. Thought that last part would have put me over but nope, gotta have more stuff 
					</p>
				</div>

				<div class="box-2">
					<h1>Goodbye World</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<a class="button" href="">Read More</a>
				</div>

				<div class="categories">
					<h2>Categories</h2>
					<ul>
						<li><a href="#">Category 1</a></li>
						<li><a href="#">Category 2</a></li>
						<li><a href="#">Category 3</a></li>
						<li><a href="#">Category 4</a></li>
						<li><a href="test.html">Category 5</a></li>
					</ul>
				</div>

				<form class="my-form">
					<div class="form-group">
						<label>Name: </label>
						<input type="text" name="name" />
					</div>
					<div class="form-group">
						<label>Email: </label>
						<input type="text" name="email" />
					</div>
					<div class="form-group">
						<label>Message: </label>
						<textarea name="message"></textarea>
					</div>
					<input class="button" type="submit" value="Submit" name="" />
				</form>

				<div class="block">
					<h3>Heading</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>
				<div class="block">
					<h3>Heading</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>
				<div class="block">
					<h3>Heading</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>

				<div class="clr"></div>

				<div id="main-block">
					<h3>Heading</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>

				<div id="sidebar">
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					</p>
				</div>

				<div class="clr"></div>

				<div class="p-box">
					<h1>Hello</h1>
					<h2>Goodbye</h2>
				</div>

				<ul class="my-list">
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
					<li>List Item</li>
				</ul>
			</div>

			<a class="fix-me button" href="">Hello</a>

			<div style={{marginTop:"500px"}}></div>
		</div>
		)
	};

export default CSSCheatSheet;