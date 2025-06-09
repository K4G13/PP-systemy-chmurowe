Vagrant.configure("2") do |config|

    # DATABASE
    config.vm.define "DATABASE" do |db|
        db.vm.box = "ubuntu/focal64"
        db.vm.hostname = "DATABASE"
        db.vm.network "private_network", ip: "192.168.56.40"
        db.vm.synced_folder "./data", "/home/vagrant/data"
        db.vm.provision "ansible_local" do |ansible|
            ansible.playbook = "vagrant_playbooks/database.yml"
        end
    end

    # BACKEND
    config.vm.define "BACKEND" do |backend|
        backend.vm.box = "ubuntu/focal64"
        backend.vm.hostname = "BACKEND"
        backend.vm.network "private_network", ip: "192.168.56.41"
        backend.vm.synced_folder "./backend", "/home/vagrant/backend"
        backend.vm.provision "ansible_local" do |ansible|
            ansible.playbook = "vagrant_playbooks/backend.yml"
        end
    end

    # FRONTEND
    config.vm.define "FRONTEND" do |frontend|
        frontend.vm.box = "ubuntu/focal64"
        frontend.vm.hostname = "FRONTEND"
        frontend.vm.network "private_network", ip: "192.168.56.42"
        frontend.vm.network "forwarded_port", guest: 80, host: 2115, host_ip: "127.0.0.1"
        frontend.vm.synced_folder "./frontend", "/home/vagrant/frontend"
        frontend.vm.provision "ansible_local" do |ansible|
        ansible.playbook = "vagrant_playbooks/frontend.yml"
        end
    end
end