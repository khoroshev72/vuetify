<template>
<v-container>
  <v-card>
    <v-card-title>
      {{department.name}}
    </v-card-title>

    <v-row>
      <v-col>
        <v-card-text>
          <v-treeview
              v-model="tree"
              :items="items"
              :load-children="fetchProjects"
              open-on-click
              expand-icon="mdi-chevron-down"
          >
          </v-treeview>
        </v-card-text>
      </v-col>
    </v-row>

  </v-card>

</v-container>
</template>

<script>
export default {
  name: "Departments",
  data: () => ({
    department: {
      id: 1,
      name: 'Подразделение Газпрома',
      projectsIds: [1, 9, 42, 20],
      children: []
    },
    tree: [],
    projects: []
  }),
  computed: {
    items() {

      const children = this.projects.map(p => {
        return {
          id: p.id,
          name: p.name,
          children: []
        }
      })

      return [{
        id: 1,
        name: 'Загрузить все объекты',
        children
      }]
    }
  },
  methods: {
    fetchProjects() {
      if (this.projects.length) return

      this.department.projectsIds.forEach( id => {
        fetch(`http://localhost:3000/projects/${id}`)
        .then(res => res.json())
        .then(data => this.projects.push(data))
        .catch(err => console.log(err))
      })
    },
    getChildren(childrenIds) {
      if (!childrenIds.length) return []

      const children = []

      childrenIds.forEach( id => {
        fetch(`http://localhost:3000/projects/${id}`)
            .then(res => res.json())
            .then(data => {
              delete data.childrenIds
              children.push(data)
            })
            .catch(err => console.log(err))
      })

      return children
    }
  }
}
</script>

<style scoped>

</style>