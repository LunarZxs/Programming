package com.example.myapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.item_todo.*

class MainActivity : AppCompatActivity() {
    private lateinit var todoAdapter:TodoAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        todoAdapter = TodoAdapter(mutableListOf())

        rvTodoItems.adapter = todoAdapter
        rvTodoItems.layoutManager = LinearLayoutManager(this)

        buttonPanel.setOnClickListener{
            val todoTitle = edTodoTitle.text.toString()

            if(todoTitle.isNotEmpty()){
                val todo = Todo(todoTitle)
                todoAdapter.addTodo(todo)
                edTodoTitle.text.clear()
            }
        }
        buttonDelete.setOnClickListener {
            todoAdapter.deleteDoneTodos()
        }
    }
}