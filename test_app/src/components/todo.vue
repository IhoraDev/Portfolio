<template>
    <div class="todo">
        <h1 class="title"> ToDo List </h1>
        <ul class="tasks">
            <li class="list-group-item" v-for="(task, index) in tasks" :class="{complete : task.complete}">
                <transition name="modal">
                <forum>
                    <input
                            type="checkbox"
                            v-model="task.complete" />
                    {{task.name}}
                    <button class="btn btn-danger"  @click="deleteTask(index)"> Remove </button>
                </forum>
                </transition>
            </li>
        </ul>
        <forum>
            <ui-textbox placeholder="e.g. 'read vue.js guide'" v-model="newTaskName" class="form-control  mb-2"></ui-textbox>

            <ui-button color="primary" @click="saveTasks" class="btn btn-outline-secondary save"> Save tasks </ui-button>
            <ui-button color="red" @click="addTask" icon="add" class="btn btn-outline-secondary add"> Add </ui-button>
            <ui-button color="green" @click="showComplete" class="btn btn-outline-secondary show"> Show Complete </ui-button>
            <ui-button color="green" @click="showPending" class="btn btn-outline-secondary"> Show Pending </ui-button>
        </forum>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newTaskName : '',
                tasks : [
                    {name :
                            'This is first task',
                        complete : true},
                    {name :
                            'This is second  complited task',
                        complete : true},
                    {name :
                            'Task is not complited',
                        complete : false}
                ]
            }
        },

        methods : {
            addTask() {
                if (this.newTaskName !== '') {
                    this.tasks.push({
                        name: this.newTaskName,
                        complete: false,
                    });
                    this.newTaskName = "";
                }
            },

            deleteTask: function (index) {
                this.tasks.splice(index, 1);
            },

            showComplete(){
                this.tasks = this.tasks.filter(
                  task => task.complete
                );
             },

            showPending(){
                this.tasks = this.tasks.filter(
                  task => !task.complete
                );
            },

            saveTasks: function () {
               localStorage.setItem('MyTasks', JSON.stringify(this.tasks));
            }

        }
    };
</script>
